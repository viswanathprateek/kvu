import { Component, OnInit } from '@angular/core';

export class LR1{
  position: number
  lrNo: String
  truckNo: String
  quantity: String
}

const ELEMENT_DATA: LR1[] = [
  {position: 1, lrNo: "1201", truckNo: 'TS07EC1234', quantity: "34.5"},
  {position: 2, lrNo: "1202", truckNo: 'TS07EC1234', quantity: "32.4"},
  {position: 3, lrNo: "1203", truckNo: 'TS07EC1234', quantity: "36.7"},
  {position: 4, lrNo: "1204", truckNo: 'TS07EC1234', quantity: "31.58"},
  {position: 5, lrNo: "1205", truckNo: 'TS07EC1234', quantity: "32.42"},
];

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  displayedColumns = ['position', 'lrNo', 'truckNo', 'quantity'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
