import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lrlist',
  templateUrl: './lrlist.component.html',
  styleUrls: ['./lrlist.component.css']
})
export class LRListComponent implements OnInit {

  lrList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  constructor() { }

  ngOnInit() {
  }

}
