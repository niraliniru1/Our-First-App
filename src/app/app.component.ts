import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'our-first-app';
  showPay = true;
  showCC = false;
  showRec = false;

  OnPayClick() {
    this.showPay = false;
    this.showCC = true;
  }

  OnCCClick() {
    this.showCC = false;
    this.showRec = true;
  }
}
