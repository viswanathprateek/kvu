import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../service/network.service';
import { Bill } from '../Models/Bill';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  billsList: Bill[];

  constructor(private service: NetworkService) { }

  ngOnInit() {
    this.service.getBillsList().subscribe((billList) =>{
      this.billsList = billList["BillList"]
    })
  }

}
