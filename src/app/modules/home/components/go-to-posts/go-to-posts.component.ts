import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-go-to-posts',
  templateUrl: './go-to-posts.component.html',
  styleUrls: ['./go-to-posts.component.scss'],
})
export class GoToPostsComponent implements OnInit {
  currentLang: string = this.translate.currentLang;

  constructor(private router: Router, public translate: TranslateService) {}

  goToPostsPage() {
    this.router.navigate(['/posts']);
  }

  ngOnInit() {
    this.translate.use(this.currentLang);
  }
}
