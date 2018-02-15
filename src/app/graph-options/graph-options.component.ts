import { Component, OnInit, ViewChild } from '@angular/core';
import { SiblingInteractionService } from 'app/sidenav-graph-service';
import { BaseChartDirective } from 'ng2-charts';

import { MockDataGridService } from 'app/mock-data-grid-service'

@Component({
  selector: 'app-graph-options',
  templateUrl: './graph-options.component.html',
  styleUrls: ['./graph-options.component.scss'],

})
export class GraphOptionsComponent implements OnInit {
  

  constructor(private siblingInteraction: SiblingInteractionService, private mockData: MockDataGridService) { }

  chartVisible: boolean = false;
  dataGridVisible: boolean = false;

  details: any[];
  context: string;
  sliceClicked: string;


  @ViewChild("baseChart") chart: BaseChartDirective;

  refreshChart() {
    this.chartVisible = false;
    setTimeout(() => {
      this.chartVisible = true;
    }, 1);
  }

  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  public options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return data.labels[tooltipItem.index];
        }
      }
    }
  }


  refreshDataGrid() {
    this.dataGridVisible = false;
    setTimeout(() => {
      this.dataGridVisible = true;
    }, 1);
  }

  public chartClicked(e: any): void {
    if (e.active[0] !== undefined) {
      this.mockData.sliceClicked = this.pieChartLabels[e.active[0]._index];
      this.sliceClicked = this.pieChartLabels[e.active[0]._index];
      this.mockData.valueUpdated();
      this.details = this.mockData.details;
      this.refreshDataGrid();
    }
  }

  populateData(context) {

    this.pieChartLabels = [];
    this.pieChartData = [];
    this.mockData.context = context;
    this.context = context;
    this.mockData.entityID = this.siblingInteraction.entityID;

    if (context == 'Cluster') {
      this.pieChartLabels = ['Provider List', 'Remote mem util', 'RDMA Network utilization',
        'I/O Bandwidth', 'Consumer List'];
      this.pieChartData = [100, 100, 100, 100, 100];
    }
    else if (context == 'Provider') {
      this.pieChartLabels = ['Remote Mem Contribution', 'Consumer List', 'I/O Bandwidth'];
      this.pieChartData = [100, 100, 100];
    }
    else if (context == 'Consumer') {
      this.pieChartLabels = ['Remote Memory Usage', 'Provider List', 'I/O Bandwidth', 'VM List', 'Consumption of RM by VM'];
      this.pieChartData = [100, 100, 100, 100, 100];
    }
    else if (context == 'VM') {
      this.pieChartLabels = ['Provider List', 'RM Usage', 'Number of SwapOuts', 'Number of SwapIns'];
      this.pieChartData = [100, 100, 100, 100];
    }

  }



  ngOnInit() {
    this.siblingInteraction.eventNotifier.subscribe(context => { this.populateData(context); this.refreshChart(); });
  }

}
