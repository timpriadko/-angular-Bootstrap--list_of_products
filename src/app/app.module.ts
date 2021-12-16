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
import { PostPageComponent } from './modules/post/pages/post-page/post-page.component';
import { HomepageComponent } from './modules/home/pages/homepage/homepage.component';
import { PostListComponent } from './modules/post/components/post-list/post-list.component';
import { MissingTranslationService } from './core/services/translate-service/MissingTranslationService';
import { HeaderComponent } from './core/header/header.component';
import { NavigationComponent } from './core/header/navigation/navigation.component';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { GoToPostsComponent } from './modules/home/components/go-to-posts/go-to-posts.component';
import { HeadlineComponent } from './modules/post/components/headline/headline.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    HeaderComponent,
    NavigationComponent,
    HomepageComponent,
    ErrorPageComponent,
    PostPageComponent,
    GoToPostsComponent,
    HeadlineComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
      defaultLanguage: 'en',
    }),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
