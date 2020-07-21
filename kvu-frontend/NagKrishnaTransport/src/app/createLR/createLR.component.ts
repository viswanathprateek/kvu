import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lr',
  templateUrl: './createLR.component.html',
  styleUrls: ['./createLR.component.css']
})
export class CreateLRComponent implements OnInit {

  @Input() data

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
