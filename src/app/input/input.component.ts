import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Input() labelName: string;
@Input() type:string;
@Input() required: boolean=true;
@Input() name:string;
@Input() pattern:string;
@Output() value = new EventEmitter<string>();
  constructor() { }

  input: NgModel;

  ngOnInit(): void {
    console.log(this.input)
  }

  onValueChange(event): any {
    this.value.emit(event);
  }

}
