import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayComponent } from './pay/pay.component';
import { CreditComponent } from './credit/credit.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PayComponent,
    CreditComponent,
    ReceiptComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
