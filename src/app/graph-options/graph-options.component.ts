import { Component, OnInit, ViewChild } from '@angular/core';
import { SiblingInteractionService } from 'app/sibling-interaction.service';
import { BaseChartDirective } from 'ng2-charts';



@Component({
  selector: 'app-graph-options',
  templateUrl: './graph-options.component.html',
  styleUrls: ['./graph-options.component.scss']
})
export class GraphOptionsComponent implements OnInit {

  constructor(private siblingInteraction: SiblingInteractionService) { }

  visible: boolean = false;

  @ViewChild("baseChart") chart: BaseChartDirective;

  refreshChart() {
    this.visible = false;
    setTimeout(() => {
      this.visible = true;
    }, 1);
  }

  public pieChartLabels:string[] = []; 
  public pieChartData:number[] = [];
  public pieChartType:string = 'pie';

  public chartClicked(e:any):void {
    console.log(e);
  }

  populateData(name) {
    
    this.pieChartLabels = [];
    this.pieChartData = [];

    if(name == 'Cluster') {
      this.pieChartLabels = ['Provider List', 'Remote mem util', 'RDMA Network utilization',
                             'I/O Bandwidth', 'Consumer List'];
      this.pieChartData = [100, 100, 100, 100, 100];
    }  
    else if(name == 'Provider') {
      this.pieChartLabels = ['Remote Mem Contribution', 'Consumer List', 'I/O Bandwidth'];
      this.pieChartData = [100, 100, 100];
    }
    else if(name == 'Consumer') {
      this.pieChartLabels = ['Remote Memory Usage', 'Provider List', 'I/O Bandwidth', 'VM List', 'Consumption of RM by VM'];
      this.pieChartData = [100, 100, 100, 100, 100];
    }
    else if(name == 'VM') {
      this.pieChartLabels = ['Provider List', 'RM Usage', 'Number of SwapOuts', 'Number of SwapIns'];
      this.pieChartData = [100, 100, 100, 100];
    }

  }

  ngOnInit() {
    this.siblingInteraction.eventNotifier.subscribe(name => {  this.populateData(name);  this.refreshChart(); });
  }

}
