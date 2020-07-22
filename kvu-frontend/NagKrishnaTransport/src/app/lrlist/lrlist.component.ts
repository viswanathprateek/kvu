import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lrlist',
  templateUrl: './lrlist.component.html',
  styleUrls: ['./lrlist.component.css']
})
export class LRListComponent implements OnInit {

  lrList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
  companiesList: string[] = ['Deccean Cements Ltd', 'Bharath Cement', 'Sree Chakra Cement'];
  truckList: string[] = ['TS07EC1054', 'TS07AG1342', 'AP09FE9700', 'TS07KT3524', 'TN07MN4536'];
  selectedLRNos: string[] = ['1201', '1205', '1204', '1208', '1209','1206']

  constructor() { }

  ngOnInit() {
  }

}
