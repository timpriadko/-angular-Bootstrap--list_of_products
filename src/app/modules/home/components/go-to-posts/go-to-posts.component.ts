import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-go-to-posts',
  templateUrl: './go-to-posts.component.html',
  styleUrls: ['./go-to-posts.component.scss'],
})
export class GoToPostsComponent {
  constructor(private router: Router) {}

  goToPostsPage() {
    this.router.navigate(['/posts']);
  }
}
