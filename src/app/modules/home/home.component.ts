import { Component } from '@angular/core';
import { Copyright } from '../../core/constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomepageComponent {
  copyrightText: string = Copyright.TEXT;
}
