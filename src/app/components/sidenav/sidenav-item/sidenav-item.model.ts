export class SidenavItem {
  name!: string;
  icon: string | undefined;
  fontawesomeStyle: any;
  fontawesomePrefix: any;
  route: any;
  parent: SidenavItem | undefined;
  subItems: SidenavItem[] | undefined;
  position: number | undefined;
  badge: string | undefined;
  badgeColor: string | undefined;
  customClass: string | undefined;
  routerLinkActiveOptions: any;

  constructor(model: any = null) {
    if (model) {
      this.name = model.name;
      this.icon = model.icon;
      this.fontawesomeStyle = model.fontawesomeStyle;
      this.fontawesomePrefix = model.fontawesomePrefix;
      this.route = model.route;
      this.parent = model.parent;
      this.subItems = this.mapSubItems(model.subItems);
      this.position = model.position;
      this.badge = model.badge;
      this.badgeColor = model.badgeColor;
      this.customClass = model.customClass;
      this.routerLinkActiveOptions = model.routerLinkActiveOptions
        ? model.routerLinkActiveOptions
        : { exact: false };
    }
  }

  hasSubItems() {
    if (this.subItems) {
      return this.subItems.length > 0;
    }
    return false;
  }

  hasParent() {
    return !!this.parent;
  }

  mapSubItems(list: SidenavItem[]) {
    if (list) {
      list.forEach((item, index) => {
        list[index] = new SidenavItem(item);
      });

      return list;
    } else {
      return [];
    }
  }

  routeIsFunction() {
    return this.route instanceof Function || typeof this.route === 'function';
  }

  generateLetterIcon() {
    const words = this.name.split(' ');

    if (words.length > 1) {
      return words[0].charAt(0).toUpperCase() + words[1].charAt(0).toLowerCase();
    } else {
      return this.name.charAt(0).toUpperCase() + this.name.charAt(1).toLowerCase();
    }
  }
}
