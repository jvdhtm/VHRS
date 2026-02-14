# VHRS Project

Human Resource Management System built with Django (backend) and React/TypeScript (frontend).

## Tech Stack

- **Backend**: Django 3.2, Django REST Framework
- **Frontend**: React, TypeScript, Vite, TanStack Query
- **Database**: PostgreSQL (default)
- **Authentication**: Token-based (DRF authtoken)
- **API Docs**: drf-yasg (Swagger/OpenAPI)

## Project Structure

```
VHRS/
├── VectorHRS/              # Django backend
│   ├── VectorHRS/         # Django project settings
│   │   ├── settings.py    # Main settings
│   │   ├── urls.py        # Root URL configuration
│   │   └── wsgi.py
│   ├── identity_api/       # Authentication & user management
│   ├── staff_api/         # Staff-related API
│   ├── people/            # People/employees module
│   ├── news/               # News module
│   ├── questions/         # Questions module
│   ├── base/              # Base models and utilities
│   ├── utils/             # Shared utilities
│   ├── api_doc/           # API documentation helpers
│   └── manage.py
└── VectorHRS-frontend/    # React frontend
    ├── apps/
    │   ├── macaco/        # Main React app
    │   ├── trampoline/    # Secondary app
    │   └── lines/         # Another app
    └── packages/
        ├── resources/     # Shared resources
        ├── cli/           # CLI tools
        └── user-interfaces/
```

## Key Conventions

### Django
- Models: Located in each app's `models.py`
- Serializers: Located in each app's `serializers.py`
- Views: Located in each app's `views.py`
- URL configs: Each app has `urls.py`, included in main `urls.py`
- CustomUser model in `identity_api` (AUTH_USER_MODEL)

### Frontend
- Uses React with TypeScript
- TanStack Query for data fetching
- Custom hooks in `packages/user-interfaces/src/context/`
- Components in `packages/user-interfaces/src/components/`

## Dynamic Components

The frontend provides reusable dynamic components:

### DynamicForm
- **Location**: `packages/user-interfaces/src/components/Dynamics/DynamicForm.tsx`
- Renders a form based on resource fields and annotations

### DynamicTable
- **Location**: `packages/user-interfaces/src/components/Dynamics/DynamicTable.tsx`
- Renders a table based on resource fields and annotations

### DynamicList
- **Location**: `packages/user-interfaces/src/components/Dynamics/DynamicList.tsx`
- Renders a list based on resource fields and annotations

## Component Pattern

Each resource can have components in `packages/user-interfaces/src/components/<ResourceName>/`:
```
components/
├── Person/
│   ├── PersonForm.tsx
│   ├── PersonTable.tsx
│   ├── PersonList.tsx
│   └── index.ts
├── User/
│   ├── UserForm.tsx
│   ├── UserTable.tsx
│   ├── UserList.tsx
│   └── index.ts
└── ...
```

Example usage:
```tsx
import { DynamicForm } from "../Dynamics/DynamicForm";
import { resources } from "@vhrs/resources";

const PersonForm = () => (
  <DynamicForm 
    resource={resources.Person} 
    includeFields={['firstname', 'lastname', 'age']}  
  />
);
```

## Model Generation & Annotation Pattern

The frontend uses a two-layer approach for API models:

### 1. Auto-generated Resources (from Swagger)
- **Location**: `packages/resources/src/servers/resources/`
- **Generated from**: Django Swagger API at `/swagger/`
- **Contains**: Raw API resource definitions with fields, types, and endpoints
- **Example**: `Person.ts` defines the Person resource with all API fields

### 2. Annotated Resources (usable UI instances)
- **Location**: `packages/user-interfaces/src/annotates/`
- **Purpose**: Extends auto-generated resources with UI-specific configurations
- **Pattern**: Create `<modelname>.tsx` file that imports and annotates the resource

```tsx
// packages/user-interfaces/src/annotates/person.tsx
import { annotateResource } from "@vhrs/resources";
import { definitions } from "@vhrs/resources";
import { AnnotatedResourceFields } from "@vhrs/resources";
import { commonAnnotations } from "./common";

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
  }
});
```

### Common Annotations
- **Location**: `packages/user-interfaces/src/annotates/common.tsx`
- **Contains**: Reusable field annotations (status, created_date_time, description)
- **Provides**: Pre-built display components (asTitle, asFormInput, asTableCell)

### Annotation Options
- `fields`: Field-specific UI configurations
- `display.components.asTitle`: Title representation
- `display.components.asListItem`: List item representation
- `display.components.asIcon`: Icon for menus
- `display.components.asFormInput`: Form input component
- `display.components.asTableCell`: Table cell component

### Registering Annotations
Add import to `packages/user-interfaces/src/annotates/index.tsx`:
```tsx
import './person';
import './Address';
```

## Running the Project

```bash
# Backend
cd VectorHRS
python manage.py runserver

# Frontend
cd VectorHRS-frontend
npm start
```

## API Documentation

Swagger UI available at `/swagger/` endpoint when running the backend.
