export interface SubMenuItem {
  title: string;
  path: string;
  image?: string;
}

export interface MenuItem {
  title: string;
  path: string;
  submenu?: SubMenuItem[];
}
