import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  name;
  firstName;
  lasttName;
  email;
  onSubmit = false;
  @ViewChild('f') myForm: NgForm;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {

  }

  onPayClick(): any {
    this.onSubmit = true;
    console.log(this.myForm)
    if (this.getFormStatus()) {
      return this.router.navigate(['credit']);
    };
  }

  getFormStatus() {
    return this.firstName && this.firstName.target.value;
  }

  getFirstName(event) {
    this.firstName = event;
  }


}
