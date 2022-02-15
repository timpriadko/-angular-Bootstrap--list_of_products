import { Component } from '@angular/core';

// TODO: move interface to module
export interface MenuItem {
  label: string;
  link: string;
  id: number;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    {
      label: 'Common.HOME',
      link: '/',
      id: 1,
    },
    {
      label: 'Common.POSTS',
      link: '/posts',
      id: 2,
    },
  ];
}
