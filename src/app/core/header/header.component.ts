import { Component } from '@angular/core';
import { MenuItem, MenuItems } from '../model/navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems: MenuItem[] = MenuItems;
}
