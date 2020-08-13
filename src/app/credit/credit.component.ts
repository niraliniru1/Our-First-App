import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  onSubmit= false;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  onCreditConfirm(f): any {
    this.onSubmit= true;
    console.log(f)
    if (f.status==='VALID'){
      return this.router.navigate(['receipt']);
    }
  }

  onCreditCancel() {
    this.router.navigate(['pay']);
  }

}
