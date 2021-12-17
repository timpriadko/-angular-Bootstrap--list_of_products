import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
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

  displayInputBlock: boolean = false;

  tooltipText: string = 'Click the headline text to change it';

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'fr']);
    translateService.setDefaultLang('en');

    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  newHeadline(value: string): void {
    this.newHeadlineEvent.emit(value);
    this.headlineInput = '';
  }

  displayInputBlockHandler(): void {
    this.displayInputBlock = !this.displayInputBlock;
    this.tooltipText =
      this.displayInputBlock === true
        ? 'Click the headline text to close the input block'
        : 'Click the headline text to change it';
  }
}
