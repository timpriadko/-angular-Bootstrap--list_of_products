import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { Post } from '../../post-list/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  headlineInput: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  @Output()
  removePostEvent = new EventEmitter<number>();

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

  removePost(id: number): void {
    this.removePostEvent.emit(id);
  }

  trackByFn(item): number {
    return item.id;
  }
}
