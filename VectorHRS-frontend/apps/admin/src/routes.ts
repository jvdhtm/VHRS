import { AddIcon, HamburgerIcon} from '@chakra-ui/icons';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Notfound from './pages/Notfound404'
  
  import { Route } from './types'
  
  const routes: Route[] = [
    {
      id: '1',
      icon: AddIcon,
      name: 'Dashboard',
      path: '/',
      component: Dashboard,
    },
    {
      id: '0',
      icon: AddIcon,
      name: 'Login',
      path: '/login',
      component: Login,
    },
    {
      id: '2',
      breadcrumbParentId: '1',
      menuParentId: '2',
      path: '/users',
      component: Dashboard,
      icon: AddIcon,
      name: 'User List',
    },
    {
      id: '2',
      path: '/users/statistic',
      breadcrumbParentId: '1',
      menuParentId: '1',
      component: Dashboard,
      icon: AddIcon,
      name: 'Statistic',
    },
  
    {
      id: '3',
      path: '/settings',
      breadcrumbParentId: '1',
      component: Dashboard,
      icon: AddIcon,
      name: 'Settings',
    },
    {
      id: '4',
      path: '/groups',
      name: 'Group List',
      menuParentId: '2',
      breadcrumbParentId: '1',
      icon: AddIcon,
      component: Dashboard,
    },
    {
      id: '5',
      path: '/groups/import',
      name: 'Import Group',
      menuParentId: '4',
      breadcrumbParentId: '2',
      icon: AddIcon,
      component: Dashboard,
    },
    {
      id: '404',
      path: '*',
      name: 'Not found',
      icon: AddIcon,
      component: Notfound,
    },
  ]
  
  export default routes