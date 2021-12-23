import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input()
  menuItems: Object[];

  menuActive: Boolean = false;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|fr/) ? 'fr' : 'en');
  }

  trackByFn(item): number {
    return item.id;
  }

  burgerHandler(): void {
    this.menuActive = !this.menuActive;
    console.log(this.menuActive);
  }
}
