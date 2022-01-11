import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss'],
})
export class HeadlineComponent {
  currentLang: string = this.translate.currentLang;

  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  headlineInput: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  displayInputBlock: boolean = false;

  // TODO: change content str to translation
  tooltipText: string = 'Click the headline text to change it';

  constructor(public translate: TranslateService) {
    this.translate.use(this.currentLang);
  }

  newHeadline(value: string): void {
    this.newHeadlineEvent.emit(value);
    this.headlineInput = '';
  }

  // TODO: change content str to translation
  displayInputBlockHandler(): void {
    this.displayInputBlock = !this.displayInputBlock;
    this.tooltipText =
      this.displayInputBlock === true
        ? 'Click the headline text to close the input block'
        : 'Click the headline text to change it';
  }

  // TODO: change Headline => move to the modal
}
