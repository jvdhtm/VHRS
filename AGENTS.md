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
│   ├── staff_api/              # Staff-related API
│   │                           # - Organization: Department, Staff, Function
│   │                           # - Hiring: Position, Candidate, HiringStage
│   │                           # - Calendar: Leave
│   │                           # - Surveys: Survey, SurveyQuestion, SurveyResponse
│   │                           # - Meetings: OneOnOne
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
│       ├── cli/                # Code generation CLI
│       │   └── src/
│       │       ├── modules/            # CLI modules
│       │       │   ├── generateResources.ts    # Generates resources from Swagger
│       │       │   ├── generateSchemas.ts      # Generates TypeScript types
│       │       │   ├── generateResourceFile.ts # Resource file template
│       │       │   └── findResourceModel.ts    # Resource detection
│       │       ├── constants/          # CLI configuration
│       │       │   └── Config.ts       # API endpoints, prettier config
│       │       └── index.ts            # CLI entry point
│       │
│       ├── resources/          # Auto-generated API resources from Swagger
│       │   └── src/
│       │       ├── servers/resources/    # Generated resource definitions
│       │       ├── types/               # TypeScript types (generated)
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

## Django Models

### Base Model
All models inherit from `BaseModel` (`base/models.py`):
- `status`: activated, deactivated, pending, confirmed, archived
- `created_date_time`: auto timestamp
- `updated_date_time`: auto timestamp

### Organization Structure (staff_api)
```python
# Core org structure
Department          # Hierarchical departments with shape
Staff              # Position in org chart (x, y coordinates)
Condition          # Staff condition/severity level
Function           # Job functions/roles
StaffFunctions     # Many-to-many: Staff <-> Function
StaffComment       # Comments on staff members
StaffStage         # Workflow stages
StaffLog           # Activity log

# Hiring & Recruitment
Position           # Job positions (vacant/hiring/filled/archived)
                  # Links to Department, reporting_to Staff
                  # Has salary range, employment_type, location
                  
Candidate          # Job candidates
                  # Links to Position
                  # Current stage in pipeline
                  # Rating, tags, resume
                  
HiringStage        # Pipeline stage tracking
                  # Links Candidate to stage
                  # Notes, feedback, who moved
```

### People Management (people)
```python
Person             # Employee personal info
                  # firstname, lastname, age, nationalId
                  
Address            # Employee addresses
                  # Links to Person
                  
Phone              # Employee phone numbers
                  # Links to Person
                  
Expertise          # Skills/expertise areas
ExpertiseProfile   # Person <-> Expertise link
PersonStage        # Employee lifecycle stages
PersonLog          # Employee activity log
```

### Leave & Calendar (staff_api)
```python
Leave              # Time off requests
                  # Type: vacation, sick, parental, remote, business_travel
                  # Status: pending, approved, rejected
                  # Date range, reason, approved_by
```

### Surveys (staff_api)
```python
Survey             # Employee surveys
                  # Type: engagement, performance, exit, custom
                  # Anonymous flag, deadline, recurring
                  
SurveyQuestion     # Individual questions
                  # Type: rating, text, multiple_choice, boolean
                  # Options (JSON), order, required
                  
SurveyResponse     # Individual answers
                  # Links to Survey + Question + Respondent
                  # Answer (JSON for flexibility)
```

### 1-on-1 Meetings (staff_api)
```python
OneOnOne           # Meeting management
                  # Manager + Employee (both Staff)
                  # Scheduled time, duration
                  # Agenda, shared_notes, private_notes
                  # Action items (JSON), recurring flag
```

## Model Generation & Annotation Pattern

The frontend uses a two-layer approach for API models:

## Code Generation CLI

The CLI package (`packages/cli/`) automatically generates TypeScript code from the Django Swagger API.

### Configuration

**Location**: `packages/cli/src/constants/Config.ts`

```typescript
export const SWAGGER_ENDPOINT = 'swagger.json'
export const BASE_URL = 'http://localhost:8080'
export const API_VERSION = 'v2'
export const PRETTIER_CONFIG = {
  singleQuote: true,
  semi: true,
  parser: "babel-ts",
};
```

### CLI Commands

```bash
# Build the CLI
cd VectorHRS-frontend/packages/cli
npm run build

# Sync/generate resources from Swagger API
npm run syncContexts

# Build and sync (one command)
npm run buildResources
```

### Generation Process

The CLI performs two main operations:

#### 1. Generate Resources (`generateResources.ts`)

- **Connects to**: Django Swagger API at `http://localhost:8080/swagger.json`
- **Generates**: TypeScript resource definitions for each Django model
- **Output**: `packages/resources/src/servers/resources/*.ts`
- **Creates**:
  - Individual resource files (e.g., `Person.ts`, `Staff.ts`)
  - `index.ts` barrel file exporting all resources

Each generated resource file contains:
```typescript
export const Person: ResourceObject = {
  baseUrl: '/person/',
  relatedurls: ['/person/', '/person/{id}/'],
  name: 'Person',
  type: mockType,
  fields: {
    id: { title: 'ID', type: 'integer', readOnly: true },
    firstname: { title: 'Firstname', type: 'string', maxLength: 100 },
    // ...
  },
  required: ['age'],
};
```

#### 2. Generate Schemas (`generateSchemas.ts`)

- **Connects to**: Django Swagger API
- **Generates**: TypeScript type definitions from OpenAPI spec
- **Output**: `packages/resources/src/servers/types/Models.ts`
- **Uses**: `openapi-typescript` library to convert Swagger to TypeScript

### Resource File Template

**Location**: `packages/cli/src/modules/generateResourceFile.ts`

Template generates:
- Import statements for types
- Mock type function for type inference
- ResourceObject with baseUrl, relatedurls, name, fields
- Required fields array (if any)

### Workflow

1. Update Django models
2. Run Django server (generates Swagger at `/swagger.json`)
3. Run CLI: `npm run syncContexts`
4. Resources and types are auto-generated
5. Create/update annotations in `packages/user-interfaces/src/annotates/`

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

#### Field Annotations
- `fields`: Field-specific UI configurations
- `filterable`: Enable filtering on this field (boolean)
- `sortable`: Enable sorting on this field (boolean)
- `chip`: Display as chip/badge (boolean)
- `multiple`: Allow multiple selection (boolean)
- `enumItems`: Custom enum items for select fields
- `serializeFunc`: Custom serialization function

#### Display Components
- `display.components.asTitle`: Title representation
- `display.components.asListItem`: List item representation
- `display.components.asIcon`: Icon for menus
- `display.components.asFormInput`: Form input component
- `display.components.asTableCell`: Table cell component
- `display.components.asFilter`: Filter input component
- `display.components.asImage`: Image display component
- `display.components.asThumbnail`: Thumbnail display component

#### Actions
- `actions`: Array of action functions (edit, delete, custom)
- `showInForm`: Show action in form view (boolean)
- `icon`: Action button icon (ReactNode)
- `color`: Action button color

### Related Field Annotation Helper

For ForeignKey fields, use the `relatedFieldAnnotation` helper:

```tsx
import { relatedFieldAnnotation } from "./common";

const newAnnotations: AnnotatedResourceFields<definitions['Staff']> = {
  department: {
    ...relatedFieldAnnotation('Department'),
    sortable: true,
    filterable: true,
  },
  person: {
    ...relatedFieldAnnotation('Person', 'firstname'),
    sortable: true,
    filterable: true,
  },
};
```

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

### Field Annotations with Icons

Example annotation with icons and filterable/sortable:

```tsx
// packages/user-interfaces/src/annotates/person.tsx
const newAnnotations: AnnotatedResourceFields<definitions['Person']> = {
  ...commonAnnotations,
  firstname: {
    display: {
      components: {
        asTitle: (data) => <span><PersonIcon fontSize="small" /> {data}</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
  age: {
    display: {
      components: {
        asTitle: (data) => <span><CalendarIcon fontSize="small" /> {data} years</span>,
      },
    },
    sortable: true,
    filterable: true,
  },
};

annotateResource("Person", {
  fields: newAnnotations,
  display: {
    components: {
      asListItem: (data) => <span><PeopleIcon fontSize="small" /> {data.firstname} {data.lastname}</span>,
      asTitle: () => <>People</>,
      asIcon: () => <PeopleIcon />
    }
  },
  actions: defaultActions
});
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

## Environment Variables

### Docker Compose Services

**Database (`vhrs_database`)**:
- `MYSQL_DATABASE`: Database name (default: 'vhrs')
- `MYSQL_USER`: Database user (default: 'user')
- `MYSQL_PASSWORD`: Database password (default: 'admin')
- `MYSQL_ROOT_PASSWORD`: Root password (default: 'admin')

**Django (`django`)**:
- `DJANGO_SETTINGS_MODULE`: Django settings module (default: 'VectorHRS.settings')

**Macaco Proxy (`macaco`)**:
- `API_URL`: Backend API URL (default: 'http://django:8000')
- `BASE_URL`: Base URL for CLI code generation (default: 'http://django:8000')
- `PORT`: Proxy server port (default: 4000)
- `CLIENT_APP_PATH`: Path to static assets
- `CLIENT_INDEX_PATH`: Path to index.html

### CLI Configuration

The CLI package supports environment variables for configuration:

```bash
# Override default values
export BASE_URL=http://localhost:9000
export SWAGGER_ENDPOINT=api-docs.json
export API_VERSION=v1

# Then run the CLI
npm run syncContexts
```

**Supported CLI Environment Variables**:
- `BASE_URL`: Django server URL for Swagger API (default: 'http://localhost:8080')
- `SWAGGER_ENDPOINT`: Swagger JSON endpoint path (default: 'swagger.json')
- `API_VERSION`: API version (default: 'v2')

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

---

# Product Specification

## 1. Product Overview

The system is a unified HR platform combining:

- **Organizational structure management** (visual tree)
- **Recruitment pipeline** (Kanban board)
- **Employee lifecycle tracking**
- **Leave & status calendar**
- **Surveys & feedback**
- **1-on-1 meeting management**

The entry point of the system is a **visual organization dashboard**.

## 2. Global UI Framework

### 2.1 Layout Structure

The application must use a consistent layout:

```
-------------------------------------------------
| Sidebar |          Top Navigation             |
-------------------------------------------------
|                                             |
|              Main Content Area             |
|                                             |
-------------------------------------------------
```

#### Sidebar (Left)

- Dashboard (Org Structure)
- Hiring
- Employees
- Calendar
- Surveys
- 1-on-1s
- Reports
- Settings

#### Top Navigation

- Company switcher (if multi-tenant)
- Search (global search)
- Notifications
- Profile dropdown

## 3. Module 1 – Organization Structure Dashboard

This is the **default landing page**.

### 3.1 UI Design – Org Structure View

#### Layout

- Full-width canvas
- Zoom + pan support
- Expand/collapse nodes
- Drag & drop structure editing (if permissions allow)

#### Each Node Must Display:

```
-----------------------
| Position Title      |
| Department          |
| Status Badge        |
-----------------------
```

#### Status Badge Colors:

- **Green** → Filled
- **Yellow** → Hiring
- **Gray** → Vacant
- **Red** → Archived

#### Node Variations

**Vacant Position:**
- Shows placeholder icon
- "Vacant" label
- Click opens Position Card

**Filled Position:**
- Shows employee avatar
- Employee name
- Click opens Employee Profile

### 3.2 Floating Action Buttons (Visible to HR/Admin)

- `+ Add Branch`
- `+ Add Position`

Opening either shows modal with form.

## 4. Module 2 – Position Detail Card (Vacant or Hiring)

This opens as a **right-side slide-over panel** (not full page).

### UI Structure

#### Header Section

- Position Title
- Department
- Reporting To
- Status dropdown
- Edit button
- Archive button

### Body Tabs

Tabs inside card:

1. **Overview**
2. **Hiring Pipeline**
3. **History**

### 4.1 Overview Tab

**Position Details:**
- Description
- Requirements
- Salary range
- Employment type
- Location
- Opened date

**Actions:**
- Open Hiring Board
- Duplicate Position

## 5. Module 3 – Hiring Board (ATS View)

When clicking "Open Hiring Board":

Open full-page Kanban view.

### 5.1 UI Structure

Top Section:
- Position title
- Department
- Total candidates count
- `+ Add Candidate` button
- Settings (edit stages)

### 5.2 Kanban Layout

Horizontal scrollable board:

| Stage Column    |
| --------------- |
| Candidate Cards |

Stages default:
- Job Posted
- Applications
- Screening
- Interview 1
- Interview 2
- Offer
- Hired
- Rejected

**Drag & drop required.**

Similar workflow to: Atlassian Jira

### 5.3 Candidate Card UI

Card contains:
- Candidate name
- Avatar (if available)
- Rating
- Tags
- Last activity
- Interview date (if scheduled)

Click opens right-side detail drawer.

### 5.4 Candidate Detail Drawer

Sections:
- Personal info
- Resume attachment
- Notes timeline
- Interview feedback
- Activity history

**Button:** "Mark as Hired"

When clicked:
- Create Employee record
- Update position to Filled
- Close hiring board

## 6. Module 4 – Employee Profile (Filled Position)

When clicking filled position in org chart:

Open right-side panel.

### 6.1 UI Layout

#### Header

- Employee avatar
- Full name
- Job title
- Department
- Employment status badge

**Actions:**
- Edit
- Schedule 1-on-1
- Assign Survey

### 6.2 Tabs

1. **Overview**
2. **Calendar**
3. **Feedback**
4. **1-on-1 History**
5. **Documents**

### 6.3 Overview Tab

- Employment type
- Manager
- Start date
- Contract type
- Compensation (if permission allows)
- Current status

## 7. Module 5 – Employee Calendar

When clicking Calendar tab:

Open monthly calendar view.

### 7.1 UI Requirements

Calendar must show:
- **Vacation** (Blue)
- **Sick Leave** (Orange)
- **Parental Leave** (Purple)
- **Remote Work** (Green)
- **Business Travel** (Gray)

Clicking a date:
- Opens leave detail modal

Employees can:
- Request leave

Managers/HR can:
- Approve / Reject

## 8. Module 6 – Surveys

### 8.1 Survey List Page

Table view:
- Survey name
- Type
- Assigned to
- Status
- Responses %
- Created date

**Button:** `Create Survey`

### 8.2 Survey Builder UI

Drag-and-drop question builder:

**Left panel:** Question types
**Main area:** Question editor

Settings:
- Anonymous toggle
- Deadline
- Recurring option

### 8.3 Survey Analytics View

- Average rating
- Response count
- Chart visualization
- Export CSV

## 9. Module 7 – 1-on-1 Meetings

### 9.1 1-on-1 List View

- Upcoming meetings
- Past meetings
- Filter by team

### 9.2 Meeting Detail View

Sections:
- Agenda
- Shared notes
- Private notes
- Action items

Recurring meeting toggle.

## 10. Global Design Principles

1. All detailed views open in right-side slide-over panel.
2. Primary actions always visible.
3. Drag & drop interactions must feel smooth.
4. Use consistent color system.
5. Avoid full page reloads.
6. Audit trail for every change.

## 11. MVP Scope (UI Included)

MVP must include:
- ✅ Org Structure Tree View
- ✅ Position Card
- ✅ Hiring Kanban Board
- ✅ Employee Profile
- ✅ Leave Calendar

Surveys & 1-on-1 can be phase 2.

## 12. Visual Hierarchy Summary

User Flow:

```
Org Dashboard
   ↓
Click Position
   ↓
If Vacant → Position Card → Hiring Board
If Filled → Employee Profile → Calendar / 1-on-1 / Feedback
```

## 13. UX Quality Standard

System should feel like:
- Visual clarity of org tools
- Workflow smoothness similar to:
  - Atlassian Jira boards
  - Notion style panels
- Clean enterprise polish
