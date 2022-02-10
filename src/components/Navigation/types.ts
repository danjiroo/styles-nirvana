export interface ChildrenMenuItems {
  name: string
  id: string
  route: string
}

interface MenuItems {
  component_name: string
  application_id: string
  is_enabled: boolean
  route?: string
  children_items?: ChildrenMenuItems[]
}

interface NavMenus {
  config: {
    is_enabled: boolean
    max_item: number
  }
  items: MenuItems[]
}

export interface NavigationConfig {
  nav_menus: NavMenus
}

export type NavigationProp = NavigationConfig
