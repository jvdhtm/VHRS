import React from 'react'
export interface Route {
    id: string
    icon: React.FC
    name: string
    path: string
    component: React.FC
    menuParentId?: string
    breadcrumbParentId?: string
}


  
export interface Icontent{
  children: React.ReactNode
  ClassName?: string
}