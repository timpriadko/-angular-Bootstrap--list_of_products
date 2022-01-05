import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
})
export class LanguageSelectorComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/fr|fr/) ? 'fr' : 'en');
  }

  // TODO: store selected language to be able to display translated content on the selected language
}
