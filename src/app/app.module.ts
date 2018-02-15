import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { SidenavComponent } from './sidenav/sidenav.component';
import { TabsComponent } from './tabs/tabs.component';
import { GraphOptionsComponent } from './graph-options/graph-options.component';

import { ChartsModule } from 'ng2-charts';
import { DatagridComponent } from './datagrid/datagrid.component';


import { MockDataGridService } from 'app/mock-data-grid-service';

@NgModule({
    declarations: [
        AppComponent,
        SidenavComponent,
        TabsComponent,
        GraphOptionsComponent,
        DatagridComponent,     
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ChartsModule,
        ROUTING
    ],
    providers: [ MockDataGridService ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
