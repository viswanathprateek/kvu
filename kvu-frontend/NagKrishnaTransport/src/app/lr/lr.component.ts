import { Component, OnInit, Input } from '@angular/core';
import { LR } from '../Models/LR';

@Component({
  selector: 'app-lr',
  templateUrl: './lr.component.html',
  styleUrls: ['./lr.component.css']
})
export class LRComponent implements OnInit {

  @Input() lr: LR;

  constructor() { }

  ngOnInit() {
  }

}
