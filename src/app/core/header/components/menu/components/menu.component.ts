import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MenuItem } from '../../../header.component';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input()
  menuActive: boolean;

  @Input()
  menuItems: MenuItem[];

  // constructor(public translate: TranslateService) {
  //   translate.use(this.currentLang);
  // }

  trackByFn(item): number {
    return item.id;
  }

  burgerHandler(): void {
    // this.menuActive = !this.menuActive;
  }
}
