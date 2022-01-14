import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomepageComponent } from './modules/home/home.component';
import { SinglePostPageComponent } from './modules/post/components/single-post-page/single-post-page.component';
import { PostPageComponent } from './modules/post/post.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'posts', component: PostPageComponent },
  { path: 'posts/:id', component: SinglePostPageComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
