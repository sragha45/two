import { Component, SimpleChange, OnInit, Input, SimpleChanges } from '@angular/core';

import { ProviderList_In_ClusterView, 
         ConsumerList_In_ClusterView,
         Consumer_In_ClusterView,
         Provider_In_ProviderView,
         Provider_In_ClusterView,
         Consumer_In_ConsumerView,
         VMList } from 'app/datastructure'

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  constructor() { }

  @Input()
  context: string;

  @Input()
  sliceClicked: string;  

  columns: any[];
  rows: any[] = [];

  ngOnInit() {

  }

  fillDummyData(): any[] {
    let obj: ProviderList_In_ClusterView = new ProviderList_In_ClusterView();
    obj.addProvider(new Provider_In_ClusterView("23.43.65.3", "max", "100GB"));
    obj.addProvider(new Provider_In_ClusterView("65.2.64.73", "Medium", "20GB"));
    return obj.providerList;
  }

  // TODO: This code is nasty. Find a better way to do the same.

  updateDataGrid() {

    if(this.context == 'Cluster'){
      if(this.sliceClicked == 'Provider List'){
        let obj: Provider_In_ClusterView = new Provider_In_ClusterView();
        this.columns = Object.keys(obj);
        this.rows = this.fillDummyData();
        console.log(this.rows);
      }
      else if(this.sliceClicked == 'Consumer List'){
        let obj: Consumer_In_ClusterView = new Consumer_In_ClusterView();
        this.columns = Object.keys(obj);
      }
           
    }
    else if(this.context == 'Provider') {
      if(this.sliceClicked == 'Consumer List') {
        let obj: Provider_In_ProviderView = new Provider_In_ProviderView();
        this.columns = Object.keys(obj);
      }
    }
    else if(this.context == 'Consumer') {
      if(this.sliceClicked == 'Provider List') {
        let obj: Consumer_In_ConsumerView = new Consumer_In_ConsumerView();
        this.columns = (Object.keys(obj));
        
      }
    }


  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateDataGrid();
    if(changes.context)
      console.log(changes.context.currentValue);
    if(changes.sliceClicked)
      console.log(changes.sliceClicked.currentValue);
  }



}
