import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-go-to-posts',
  templateUrl: './go-to-posts.component.html',
  styleUrls: ['./go-to-posts.component.scss'],
})
export class GoToPostsComponent implements OnInit {
  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {}

  goToPostsPage() {
    this.router.navigate(['/posts']);
  }

  ngOnInit() {
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
