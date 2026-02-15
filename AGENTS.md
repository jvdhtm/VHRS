# VHRS Project

Human Resource Management System built with Django (backend) and React/TypeScript (frontend).

## Tech Stack

- **Backend**: Django 3.2, Django REST Framework
- **Frontend**: React, TypeScript, Vite, TanStack Query
- **Database**: PostgreSQL (default)
- **Authentication**: Token-based (DRF authtoken) + Passport.js (frontend proxy)
- **API Docs**: drf-yasg (Swagger/OpenAPI)

## Project Structure

```
VHRS/
├── VectorHRS/                    # Django backend
│   ├── VectorHRS/              # Django project settings
│   │   ├── settings.py          # Main settings
│   │   ├── urls.py              # Root URL configuration
│   │   └── wsgi.py
│   ├── identity_api/            # Authentication & user management (CustomUser model)
│   ├── staff_api/              # Staff-related API (Staff, Department, Function, etc.)
│   ├── people/                 # People/employees module (Person, Address, Phone, etc.)
│   ├── news/                   # News module (NewsLetter, Comment)
│   ├── questions/             # Questions module (Question, answers)
│   ├── base/                  # Base models and utilities
│   ├── utils/                 # Shared utilities
│   ├── api_doc/               # API documentation helpers
│   └── manage.py
│
├── VectorHRS-frontend/          # React frontend
│   ├── apps/
│   │   ├── macaco/             # Express proxy server
│   │   │   ├── index.ts        # Main Express app entry
│   │   │   ├── passport.ts     # Passport.js authentication
│   │   │   ├── .env            # Environment config
│   │   │   └── package.json
│   │   └── trampoline/         # Secondary app
│   │
│   └── packages/
│       ├── resources/          # Auto-generated API resources from Swagger
│       │   └── src/
│       │       ├── servers/resources/    # Generated resource definitions
│       │       ├── types/               # TypeScript types
│       │       ├── utils/              # Utilities (annotateResource, groupResources, etc.)
│       │       ├── connect/            # API connection layer
│       │       └── index.ts            # Main exports
│       │
│       ├── user-interfaces/   # React UI components
│       │   └── src/
│       │       ├── components/
│       │       │   ├── Dynamics/       # Generic dynamic components
│       │       │   │   ├── DynamicForm.tsx
│       │       │   │   ├── DynamicTable.tsx
│       │       │   │   ├── DynamicList.tsx
│       │       │   │   └── ResourcePage.tsx
│       │       │   ├── Sidebar/
│       │       │   ├── Layout/
│       │       │   └── ...
│       │       ├── annotates/          # Resource annotations
│       │       │   ├── common.tsx     # Common field annotations
│       │       │   ├── person.tsx
│       │       │   ├── user.tsx
│       │       │   └── ...
│       │       ├── context/
│       │       │   ├── AuthContext.tsx
│       │       │   └── DataCache.tsx
│       │       ├── App.tsx
│       │       ├── main.tsx
│       │       └── theme.ts
│       │
│       └── cli/                # CLI tools
```

## Architecture Overview

### Backend (Django)
- REST API built with Django REST Framework
- Auto-generated Swagger documentation at `/swagger/`
- Token-based authentication using DRF authtoken
- Multiple apps: identity_api, staff_api, people, news, questions

### Frontend Proxy (macaco - Express)
- Express.js server that proxies API requests to Django backend
- Handles authentication via Passport.js
- Manages session/cookies
- Serves the built React app

### Frontend UI (user-interfaces - React)
- React SPA built with Vite
- TanStack Query for data fetching
- MUI for UI components

## Model Generation & Annotation Pattern

The frontend uses a two-layer approach for API models:

### 1. Auto-generated Resources (from Swagger)
- **Location**: `packages/resources/src/servers/resources/`
- **Generated from**: Django Swagger API at `/swagger/`
- **Contains**: Raw API resource definitions with fields, types, and endpoints
- **Example**: `Person.ts` defines the Person resource with all API fields

```typescript
// packages/resources/src/servers/resources/Person.ts
export const Person: ResourceObject = {
  baseUrl: '/person/',
  name: 'Person',
  fields: {
    id: { title: 'ID', type: 'integer', readOnly: true },
    firstname: { title: 'Firstname', type: 'string', maxLength: 100 },
    // ...
  },
};
```

### 2. Annotated Resources (usable UI instances)
- **Location**: `packages/user-interfaces/src/annotates/`
- **Purpose**: Extends auto-generated resources with UI-specific configurations
- **Pattern**: Create `<modelname>.tsx` file that imports and annotates the resource

```tsx
// packages/user-interfaces/src/annotates/person.tsx
import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations, defaultActions } from "./common";
import { People } from "@mui/icons-material";

const newAnnotations: AnnotatedResourceFields<definitions['Person']> = {
  ...commonAnnotations
};

annotateResource("Person", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data) => <li>{data}</li>,
      asTitle: () => <>People</>,
      asIcon: () => <People/>
    }
  },
  actions: defaultActions
});
```

### Annotation Options
- `fields`: Field-specific UI configurations
- `display.components.asTitle`: Title representation
- `display.components.asListItem`: List item representation
- `display.components.asIcon`: Icon for menus
- `display.components.asFormInput`: Form input component
- `display.components.asTableCell`: Table cell component
- `actions`: Array of action functions (edit, delete, custom)

### Common Annotations
- **Location**: `packages/user-interfaces/src/annotates/common.tsx`
- **Contains**: Reusable field annotations (status, created_date_time, description)
- **Provides**: Pre-built display components and default actions

### Registering Annotations
Add import to `packages/user-interfaces/src/annotates/index.tsx`:
```tsx
import './person';
import './user';
import './Address';
// ... other annotations
```

## Dynamic Components

### DynamicForm
- **Location**: `packages/user-interfaces/src/components/Dynamics/DynamicForm.tsx`
- Renders a form based on resource fields and annotations
- Supports custom display components via `asFormInput`
- Props: `resource`, `includeFields`, `mode`, `initialData`

### DynamicTable
- **Location**: `packages/user-interfaces/src/components/Dynamics/DynamicTable.tsx`
- Renders a table based on resource fields and annotations
- Includes actions column (edit/delete) that opens drawer with form
- Props: `resource`, `includeHeader`

### DynamicList
- **Location**: `packages/user-interfaces/src/components/Dynamics/DynamicList.tsx`
- Renders a list based on resource fields and annotations
- Props: `resource`, `includeFields`

### ResourcePage
- **Location**: `packages/user-interfaces/src/components/Dynamics/ResourcePage.tsx`
- Combines Table and List views with tab navigation
- Props: `resource`

## Grouping Resources

Resources are automatically grouped by module using `groupResourcesByModule`:
- Reads `x-vhrs-relatedResource` field from resource definitions
- Dynamically creates group names: `people.Person` → `People`, `staff_api.Staff` → `StaffApi`
- Used by Sidebar for tree navigation

## Component Pattern

Each resource component folder follows a consistent structure:

```
components/
├── Person/
│   ├── PersonTable.tsx      # Table view using DynamicTable
│   ├── PersonList.tsx       # List view using DynamicList
│   ├── PersonForm.tsx       # Form view using DynamicForm
│   └── index.tsx            # Barrel exports
├── User/
│   ├── UserTable.tsx
│   ├── UserList.tsx
│   ├── UserForm.tsx
│   └── index.tsx
└── ...
```

### Component File Structure

Each `[Resource]Table.tsx`:
```tsx
import { Box } from "@mui/material";
import DynamicTable from "../Dynamics/DynamicTable";
import { resources } from "@vhrs/resources";

const PersonTable = () => (
  <Box sx={{ p: 3 }}>
    <DynamicTable 
      resource={resources.Person} 
      includeHeader={['id', 'firstname', 'lastname', 'age']}  
    />
  </Box>
);

export default PersonTable;
```

Each `[Resource]List.tsx`:
```tsx
import { Box } from "@mui/material";
import DynamicList from "../Dynamics/DynamicList";
import { resources } from "@vhrs/resources";

const PersonList = () => (
  <Box sx={{ p: 3 }}>
    <DynamicList 
      resource={resources.Person} 
      includeFields={['firstname', 'lastname', 'status']}  
    />
  </Box>
);

export default PersonList;
```

Each `[Resource]Form.tsx`:
```tsx
import { Box } from "@mui/material";
import DynamicForm from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const PersonForm = () => (
  <Box sx={{ p: 3 }}>
    <DynamicForm 
      resource={resources.Person} 
      includeFields={['firstname', 'lastname', 'age']}  
    />
  </Box>
);

export default PersonForm;
```

Each `index.tsx`:
```tsx
export { default as PersonForm } from './PersonForm';
export { default as PersonTable } from './PersonTable';
export { default as PersonList } from './PersonList';
```

## Running the Project

```bash
# Backend (Django)
cd VectorHRS
python manage.py runserver

# Frontend Proxy (macaco)
cd VectorHRS-frontend/apps/macaco
npm start

# Or run both with docker-compose
docker-compose up
```

## API Documentation

Swagger UI available at `/swagger/` endpoint when running the backend.

## Key Types

```typescript
// Resource definition
interface ResourceObject {
  baseUrl: string;
  fields: ResourceFields | AnnotatedResourceFields;
  name: string;
  relatedurls?: string[];
  actions?: Action[];
  display?: Display;
  menu?: Menu[];
}

// Display component
interface Display {
  components?: {
    asTitle?: DisplayResource;
    asFormInput?: DisplayResource;
    asTableCell?: DisplayResource;
    asListItem?: DisplayResource;
    asIcon?: DisplayResource;
  };
}

// Action definition
type Action = (data?: any, ctx?: ResourceContext) => ActionPropType;
interface ActionPropType {
  useHandler?: () => Promise<void>;
  route?: () => string;
  redirect?: string;
  name: string;
  title: string;
}
```
