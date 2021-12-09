import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from '../libs/settings/HttpLoaderFactory';
import { MissingTranslationService } from '../services/translate-service/MissingTranslationService';
import { PostListComponent } from './post-list.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: MissingTranslationService,
      },
      useDefaultLang: true,
      defaultLanguage: 'en',
    }),
  ],
  exports: [PostListComponent],
  providers: [PostService],
})
export class PostListModule {}
