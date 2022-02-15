import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {
  MissingTranslationHandler,
  TranslateLoader,
  TranslateModule,
} from '@ngx-translate/core';
import { HttpLoaderFactory } from './libs/settings/HttpLoaderFactory';
import { AppRoutingModule } from './app-routing.module';
import { MissingTranslationService } from './core/services/translate-service/MissingTranslationService';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { PostModule } from './modules/post/post.module';
import { HeadlineComponent } from './modules/post/components/headline/headline.component';
import { HomepageComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { PostPageComponent } from './modules/post/post.component';
import { environment } from '../environments/environment';
import { NgbModalModule } from './core/modal/modal.module';
import { SinglePostModule } from './modules/single-post/single-post.module';
import { PostService } from './modules/post/services/post.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ErrorPageComponent,
    PostPageComponent,
    HeadlineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    HomeModule,
    PostModule,
    SinglePostModule,
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
    AppRoutingModule,
    NgbModalModule,
    SharedModule,
  ],
  exports: [],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
