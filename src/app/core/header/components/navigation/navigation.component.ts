import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../../../constants';
import { MenuItem } from '../../header.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  @Input()
  menuItems: MenuItem[];

  menuActive: boolean = false;

  langs: string[] = this.translate.getLangs();

  currentLang: string = this.translate.currentLang;

  constructor(public translate: TranslateService) {
    translate.addLangs([Language.EN, Language.FR]);
    translate.setDefaultLang(Language.EN);

    this.translate.use(this.currentLang);
  }

  changeLangHandler(newLang: string): void {
    this.translate.use(newLang);
  }

  trackByFn(item): number {
    return item.id;
  }

  burgerHandler(): void {
    this.menuActive = !this.menuActive;
  }

  // TODO: move "Burger" menu to separated Dumb component
}
