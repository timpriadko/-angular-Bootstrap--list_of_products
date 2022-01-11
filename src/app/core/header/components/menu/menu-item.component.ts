import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
  currentLang: string = this.translate.currentLang;

  @Input()
  menuItem: Object;

  constructor(public translate: TranslateService) {
    this.translate.use(this.currentLang);
  }
}
