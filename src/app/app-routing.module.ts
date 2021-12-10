import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PostPageComponent } from './modules/post/pages/post-page/post-page.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'posts', component: PostPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
