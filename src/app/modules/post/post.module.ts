import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { MissingTranslationService } from '../../core/services/translate-service/MissingTranslationService';
import { HttpLoaderFactory } from '../../libs/settings/HttpLoaderFactory';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { environment } from '../../../environments/environment';
import { NgbModalModule } from '../../core/modal/modal.module';

@NgModule({
  declarations: [PostListComponent, PostItemComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
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
      defaultLanguage: environment.defaultLocale,
    }),
  ],
  exports: [PostListComponent],
  providers: [PostService],
})
export class PostListModule {}
