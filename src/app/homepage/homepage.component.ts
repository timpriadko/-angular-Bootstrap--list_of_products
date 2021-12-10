import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./hhomepageome.component.scss'],
})
export class HomepageComponent {
  constructor(private router: Router) {}

  goToPostsPage() {
    this.router.navigate(['/posts']);
  }
}
