import {
    DashboardOutlined,
    GroupOutlined,
    UnorderedListOutlined,
    SettingOutlined,
    BarChartOutlined,
  } from '@ant-design/icons'
  import Dashboard from './pages/dashboard'
  import { Route } from './types'
  
  const routes: Route[] = [
    {
      id: '1',
      icon: DashboardOutlined,
      name: 'Dashboard',
      path: '/',
      component: Dashboard,
    },
    {
      id: '2',
      breadcrumbParentId: '1',
      menuParentId: '2',
      path: '/users',
      component: Dashboard,
      icon: UnorderedListOutlined,
      name: 'User List',
    },
    {
      id: '2',
      path: '/users/statistic',
      breadcrumbParentId: '1',
      menuParentId: '1',
      component: Dashboard,
      icon: BarChartOutlined,
      name: 'Statistic',
    },
  
    {
      id: '3',
      path: '/settings',
      breadcrumbParentId: '1',
      component: Dashboard,
      icon: SettingOutlined,
      name: 'Settings',
    },
    {
      id: '4',
      path: '/groups',
      name: 'Group List',
      menuParentId: '2',
      breadcrumbParentId: '1',
      icon: GroupOutlined,
      component: Dashboard,
    },
    {
      id: '5',
      path: '/groups/import',
      name: 'Import Group',
      menuParentId: '4',
      breadcrumbParentId: '2',
      icon: GroupOutlined,
      component: Dashboard,
    },
  ]
  
  export default routes