import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuComponent {
  @Input()
  menuItems: object[];

  // constructor(public translate: TranslateService) {
  //   translate.use(this.currentLang);
  // }

  trackByFn(item): number {
    return item.id;
  }
}
