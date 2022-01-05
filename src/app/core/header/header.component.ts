import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  languages: Object[] = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'French',
      value: 'fr',
    },
  ];

  menuItems: Object[] = [
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

  constructor() {}
}
