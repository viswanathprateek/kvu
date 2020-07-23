import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../service/network.service';
import { LR } from '../Models/LR';

@Component({
  selector: 'app-lrlist',
  templateUrl: './lrlist.component.html',
  styleUrls: ['./lrlist.component.css']
})
export class LRListComponent implements OnInit {

  lrList: LR[];
  companiesList: string[] = ['Deccean Cements Ltd', 'Bharath Cement', 'Sree Chakra Cement'];
  billStatus: string[] = ['Attached', 'Pending', 'Delayed'];
  selectedLRNos: string[] = ['1201', '1205', '1204', '1208', '1209','1206']

  constructor(private service: NetworkService) { }

  ngOnInit() {
    this.service.getLRList().subscribe((lrListData) =>{
      this.lrList = lrListData["LRList"] 
    })
  }

}
