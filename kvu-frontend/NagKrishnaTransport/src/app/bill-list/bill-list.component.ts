import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  billsList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

  constructor() { }

  ngOnInit() {
  }

}
