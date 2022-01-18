import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './core/error-page/error-page.component';
import { HomepageComponent } from './modules/home/home.component';
import { PostPageComponent } from './modules/post/post.component';

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
