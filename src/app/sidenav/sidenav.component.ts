import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SiblingInteractionService } from 'app/sidenav-graph-service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private siblingService: SiblingInteractionService) { }

  

  clusterSelected(event, str) {
    this.siblingService.selected = 'Cluster';
    this.siblingService.entityID = str.clusterName;
    this.siblingService.eventNotifier.emit('Cluster');
  }

  hostSelected(event, str) {
    this.siblingService.selected = (str.isProvider ? "Provider" : "Consumer");
    this.siblingService.entityID = str.hostName;
    this.siblingService.eventNotifier.emit(str.isProvider ? "Provider" : "Consumer");
  }

  vmSelected(event, str) {
    this.siblingService.selected = 'VM';
    this.siblingService.entityID = str;
    this.siblingService.eventNotifier.emit("VM");
  }

  clusters =
    {
      expanded: false,
      clustersInfo: [
        {
          clusterName: "Cluster 1",
          showChild: false,
          hosts: [
            {
              hostName: '172.21.33.21',
              isProvider: false,
              showVM: false,
              vmList: ["vm1", "vm2", "dummy"]
            },
            {
              hostName: '172.21.34.156',
              showVM: false,
              isProvider: false,
              vmList: ["CMC"]
            },
            {
              hostName: '198.168.21.44',
              showVM: false,
              isProvider: true,
              vmList: []
            },
            {
              hostName: '192.168.24.37',
              showVM: false,
              isProvider: true,
              vmList: []
            }
          ]

        },
        {
          clusterName: "Cluster 2",
          showChild: false,
          hosts: [
            {
              hostName: '172.21.33.21',
              isProvider: false,
              showVM: false,
              vmList: []
            },
            {
              hostName: '172.21.34.156',
              isProvider: false,
              showVM: false,
              vmList: []
            },
            {
              hostName: '198.168.21.44',
              isProvider: true,
              showVM: false,
              vmList: []
            },
            {
              hostName: '192.168.24.37',
              isProvider: true,
              showVM: false,
              vmList: []
            }
          ]
        }
      ]
    }

  ngOnInit() {
  }

}
