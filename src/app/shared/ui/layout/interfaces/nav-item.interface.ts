export interface NavItem {
  id : number;
  title : string;
  iconName : string;
  routeLink : string;
  action ?: (() => void) | null;
}