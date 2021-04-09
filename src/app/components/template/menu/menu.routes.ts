import { MenuModel } from '../../../core/domain/menu.model';

export const menu = JSON.parse(localStorage.getItem('proveMenu')) as MenuModel[];
