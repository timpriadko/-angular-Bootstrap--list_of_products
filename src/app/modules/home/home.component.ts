import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Copyright, Language } from '../../core/constants';

@Component({
  selector: 'app-homepage',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomepageComponent {
  currentLang: string = this.translate.currentLang;

  constructor(public translate: TranslateService) {
    translate.addLangs([Language.EN, Language.FR]);
    translate.setDefaultLang(Language.EN);

    this.translate.use(this.currentLang);
  }
}
