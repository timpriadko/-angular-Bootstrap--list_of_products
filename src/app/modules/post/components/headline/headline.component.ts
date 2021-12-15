import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { Post } from '../../post.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent {
  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  headlineInput: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('en');

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    console.log(browserLang);
  }

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }

  newHeadline(value: string): void {
    this.newHeadlineEvent.emit(value);
    this.headlineInput = '';
  }
}
