import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.scss']
})
export class PayComponent implements OnInit {
  name;
  answer ='';
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
    
  }
  onNamechange(event): any {
    console.log(event);
    this.name= event.target.value;
}
  onPayClick(f): any {
    console.log(f)
    if (f.status==='VALID') { 
      return this.router.navigate(['credit']);
    }; 
    

  }

}
