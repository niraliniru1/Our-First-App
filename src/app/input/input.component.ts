import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

@Output() FirstName = new EventEmitter<string>();
  constructor() { }
  @Input() labelName: string;
  @Input() type:string;
  @Input() required: boolean=true;
  @Input() name:string;
  @Input() pattern:string;
  input: NgModel;



  ngOnInit(): void {
    console.log(this.input)

  }
  onNamechange(event,input): any {
    console.log(input);
    this.name= event.target.value;
  }

  checkForPattern() {
    
  }

}
