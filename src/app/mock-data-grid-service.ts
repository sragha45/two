import { Injectable, EventEmitter } from '@angular/core';

import { Consumer, Provider, Cluster, ClusterDetails, Provider_In_ClusterView, Consumer_In_ClusterView, Provider_In_ProviderView, Consumer_In_ConsumerView, VM } from 'app/datastructure'

@Injectable()
export class MockDataGridService {

  sliceClicked: string = "";
  context: string = "";
  entityID: string = "";

  details: any[] = [];


  // notifyChanges: EventEmitter<string> = new EventEmitter();

  constructor() { }

  getClusterDetails1(): ClusterDetails {
    let clusterDetails: ClusterDetails = new ClusterDetails;
    
    let providers: Provider_In_ClusterView[] = [];
    providers.push(new Provider_In_ClusterView("198.168.21.44", "10Mbps", "20GB"));
    providers.push(new Provider_In_ClusterView("192.168.24.37", "2Mbps", "3GB"));

    let consumers: Consumer_In_ClusterView[] = [];
    consumers.push(new Consumer_In_ClusterView("172.21.33.21", "5Mbps"));
    consumers.push(new Consumer_In_ClusterView("172.21.34.156", "5Mbps"));

    clusterDetails.consumerList = consumers;
    clusterDetails.providerList = providers;
    clusterDetails.io_bandwidth = "40Mbps";
    clusterDetails.RDMAUtilization = "Max";
    clusterDetails.remoteMemoryUtil = "30%";

    return clusterDetails;
  }

  getClusterDetails2(): ClusterDetails {
    let clusterDetails: ClusterDetails = new ClusterDetails;

    let providers: Provider_In_ClusterView[] = [];
    providers.push(new Provider_In_ClusterView("198.168.21.44", "10Mbps", "20GB"));
    providers.push(new Provider_In_ClusterView("192.168.24.37", "2Mbps", "3GB"));

    let consumers: Consumer_In_ClusterView[] = [];
    consumers.push(new Consumer_In_ClusterView("172.21.33.21", "5Mbps"));
    consumers.push(new Consumer_In_ClusterView("172.21.34.156", "5Mbps"));

    clusterDetails.consumerList = consumers;
    clusterDetails.providerList = providers;
    clusterDetails.io_bandwidth = "40Mbps";
    clusterDetails.RDMAUtilization = "Max";
    clusterDetails.remoteMemoryUtil = "30%";

    return clusterDetails;
  }

  fillClusterDetails() {
    let clusters : Cluster[] = [];
    clusters.push(new Cluster("Cluster 1", this.getClusterDetails1()));
    clusters.push(new Cluster("Cluster 2", this.getClusterDetails2()));
    
    this.details = clusters;
  }

  getProviderDetails1() {
    let provider: Provider_In_ProviderView = new Provider_In_ProviderView();
    provider.remoteMemoryContribution = "100GB";
    provider.consumerList = [];
    provider.consumerList.push(new Consumer_In_ClusterView("172.21.33.21", "5Mbps"));
    provider.consumerList.push(new Consumer_In_ClusterView("172.21.34.156", "5Mbps"));
    return provider;
  }

  getProviderDetails2() {
    let provider: Provider_In_ProviderView = new Provider_In_ProviderView();
    provider.remoteMemoryContribution = "30GB";
    provider.consumerList = [];
    provider.consumerList.push(new Consumer_In_ClusterView("172.43.65.83", "9Mbps"));
    return provider;
  }

  fillProviderDetails() {
    let providers: Provider[] = [];
    providers.push(new Provider("192.168.24.37", this.getProviderDetails1()));
    providers.push(new Provider("198.168.21.44", this.getProviderDetails2()));
    this.details = providers;
  }

  getConsumerDetails1(): Consumer_In_ConsumerView {
    let consumer: Consumer_In_ConsumerView = new Consumer_In_ConsumerView;
    consumer.remoteMemoryUsage = "30%";
    consumer.io_temperature = "hot";
    
    consumer.listOfProviders = [];
    consumer.listOfProviders.push(new Provider_In_ClusterView("192.168.24.37", "30Mbps", "20%"));
    consumer.listOfProviders.push(new Provider_In_ClusterView("198.168.21.44", "20Mbps", "10%"));

    consumer.vmList = ["CMC"];  
    
    return consumer;
  }

  getConsumerDetails2(): Consumer_In_ConsumerView {
    let consumer: Consumer_In_ConsumerView = new Consumer_In_ConsumerView;
    consumer.remoteMemoryUsage = "30%";
    consumer.io_temperature = "hot";
    
    consumer.listOfProviders = [];
    consumer.listOfProviders.push(new Provider_In_ClusterView("192.168.24.37", "30Mbps", "20%"));
    consumer.listOfProviders.push(new Provider_In_ClusterView("198.168.21.44", "20Mbps", "10%"));
    
    consumer.vmList = ["vm1", "vm2"];
    return consumer;
  }

  fillConsumerDetails() {
    let consumers: Consumer[] = [];
    consumers.push(new Consumer("172.21.33.21", this.getConsumerDetails1()));
    consumers.push(new Consumer("172.21.34.156", this.getConsumerDetails2()));
    this.details = consumers;
  }

  fillVMDetails() {
    let vms : VM[] = [];
    vms.push(new VM("vm1", ["192.168.24.37", "198.168.21.44"], "2GB", 300, 430));
    vms.push(new VM("vm2", ["192.168.24.37", "198.168.21.44"], "1GB", 600, 910));
    this.details = vms;
    
  }

  valueUpdated() {


    if(this.context == 'Cluster') {
      this.fillClusterDetails();
      this.details.filter(obj => {
        if(obj.id == this.entityID) {
          this.details = obj;
        }
      });
      // console.log(this.details.filter(obj => {
      //   // if(obj.id == this.entityID)
      //   //   this.notifyChanges.emit(obj);
      //   return obj.id == this.entityID;
      // }));  
    }
    else if(this.context == 'Provider') {
      this.fillProviderDetails();
      this.details.filter(obj => {
        if(obj.ip == this.entityID) {
          this.details = obj;
        }
      });
      // console.log(this.details.filter(obj => {
      //   // if(obj.id == this.entityID)
      //   //   this.notifyChanges.emit(obj);
      //   return obj.ip == this.entityID;
      // }));
    }
    else if(this.context == 'Consumer') {
      this.fillConsumerDetails();
      this.details.filter(obj => {
        if(obj.ip == this.entityID) {
          this.details = obj;
        }
      });
      // console.log(this.details.filter(obj => {
      //   // if(obj.id == this.entityID)
      //   //   this.notifyChanges.emit(obj);
      //   return obj.ip == this.entityID;
      // }));
    }
    else if(this.context == 'VM') {
      this.fillVMDetails();
      this.details.filter(obj => {
        if(obj.id == this.entityID) {
          this.details = obj;
        }
      });
      // console.log(this.details.filter(obj => {
      //   // if(obj.id == this.entityID)
      //   //   this.notifyChanges.emit(obj);
      //   return obj.id == this.entityID;
      // }));  
    }
    // console.log(this.details);
    // this.notifyChanges.emit();
    // console.log( this.details);
    // this.notifyChanges.emit("kdsfj");
  }
}
