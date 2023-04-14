import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'Ottoman', 'tr']);
    translate.setDefaultLang('en');

    const browserLang: any = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|Ottoman|tr/) ? browserLang : 'en');
  }
}
