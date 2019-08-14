import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
@Input()values:any
  constructor() { }

  ngOnInit() {
console.log('I m adi')
    console.log(this.values)
  }


}
