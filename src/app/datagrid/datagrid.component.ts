import { Component, SimpleChange, OnInit, Input, SimpleChanges } from '@angular/core';

import { MockDataGridService } from 'app/mock-data-grid-service';

import { Consumer_In_ClusterView,
         Provider_In_ProviderView,
         Provider_In_ClusterView,
         Consumer_In_ConsumerView,
         VM } from 'app/datastructure'

@Component({
  selector: 'app-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

  constructor(private mockData: MockDataGridService) { }
  
  
  @Input()
  details: any;
  @Input() 
  sliceClicked: string;
  @Input()
  context: string;

  columns: any[];
  rows: any[] = [];

  shouldDisplayTable: boolean;

  ngOnInit() {}

  // TODO: This code is nasty. Find a better way to do the same.

  // fillDummyDataForProviderInClusterView(): any[] {
  //   let obj: ProviderList_In_ClusterView = new ProviderList_In_ClusterView();
  //   obj.addProvider(new Provider_In_ClusterView("23.43.65.3", "0.1Mbps", "100GB"));
  //   obj.addProvider(new Provider_In_ClusterView("65.2.64.73", "10Kbps", "20GB"));
  //   return obj.providerList;
  // }

  // fillDummyDataForConsumerInClusterView(): any[] {
  //   let obj: ConsumerList_In_ClusterView = new ConsumerList_In_ClusterView();
  //   obj.addConsumer(new Consumer_In_ClusterView("89.32.13.6", "10Mbps"));
  //   obj.addConsumer(new Consumer_In_ClusterView("90.18.41.62", "Mbps"));
  //   return obj.consumerList;
  // }

  updateDataGrid() {
    // console.log(this.details);
    this.shouldDisplayTable = false;  
    if(this.context == 'Cluster'){
      if(this.sliceClicked == 'Provider List'){
        this.shouldDisplayTable = true;
        let obj: Provider_In_ClusterView = new Provider_In_ClusterView();
        this.columns = Object.keys(obj);
        // console.log(this.details.details.providerList);
        this.rows = this.details.details.providerList;
        // console.log(this.columns);
        // this.rows = this.details[0].details.providerList;
        // console.log(this..details[0].details.providerList);
        // this.rows = this..details;
        // this.rows = this.fillDummyDataForProviderInClusterView();
      }
      else if(this.sliceClicked == 'Consumer List'){
        this.shouldDisplayTable = true;
        let obj: Consumer_In_ClusterView = new Consumer_In_ClusterView();
        this.columns = Object.keys(obj);
        this.rows = this.details.details.consumerList;
        
        // console.log(this..details);        
        // this.rows = this.fillDummyDataForConsumerInClusterView();
      }
           
    }
    else if(this.context == 'Provider') {
      if(this.sliceClicked == 'Consumer List') {
        this.shouldDisplayTable = true;
        let obj = this.details.details.consumerList[0];
        console.log(obj);
        this.columns = Object.keys(obj);
        this.rows = this.details.details.consumerList;
      }
    }
    else if(this.context == 'Consumer') {
      if(this.sliceClicked == 'Provider List') {
        this.shouldDisplayTable = true;
        let obj = this.details.details.listOfProviders[0];
        this.columns = (Object.keys(obj));
        this.rows = this.details.details.listOfProviders;
        
      }
    }


  }

  ngOnChanges(changes: SimpleChanges) {
    this.updateDataGrid();
  }


}
