import { Component, OnInit } from '@angular/core';
import { SiblingInteractionService } from 'app/sidenav-graph-service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  constructor(private siblingService: SiblingInteractionService) { }

  

  ngOnInit() {
  }

}
