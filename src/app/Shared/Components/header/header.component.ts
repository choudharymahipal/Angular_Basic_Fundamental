import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'hi']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    //
  }

  onLanguageChange(event: any) {
    debugger
    this.translate.use(event.target.value);
  }
}
