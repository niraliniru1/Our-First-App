import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  name;
  onSubmit= false;
  @ViewChild('f') myForm: NgForm;
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    
  }
  onNamechange(event): any {
    console.log(event);
    this.name= event.target.value;
}
  onPayClick(): any {
    this.onSubmit= true;
    console.log(this.myForm);
    if (this.myForm.status==='VALID') { 
      return this.router.navigate(['credit']);
    }; 
    

  }

}
