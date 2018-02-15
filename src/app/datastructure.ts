import { Injectable } from "@angular/core";

export class Provider_In_ClusterView {
    constructor(public ip: string = "IP Address", 
                public io_bandwidth: string = "IO Bandwidth", 
                public remoteMemoryContribution: string = "remoteMemoryContribution") {
    }
}

export class ProviderList_In_ClusterView {
    providerList: Provider_In_ClusterView[] = [];

    addProvider(provider: Provider_In_ClusterView) {
        this.providerList.push(provider);
    }
}

export class Consumer_In_ClusterView {
    constructor(public ip: string = "IP Address", 
                public io_bandwidth : string = "IO Bandwidth"){

    }
}

export class ConsumerList_In_ClusterView {
    consumerList: Consumer_In_ClusterView[] = [];

    addConsumer(consumer: Consumer_In_ClusterView) {
        this.consumerList.push(consumer);
    }
}

export class Provider_In_ProviderView {
    constructor(public remoteMemoryContribution: string = "remoteOfProvider",
                public consumerList: Consumer_In_ClusterView = null) {
        
    }
}

export class Consumer_In_ConsumerView {
    constructor(public remoteMemoryUsage: string = "remoteMemUsage", 
                public listOfProviders: ProviderList_In_ClusterView = null,
                public io_temperature: string = "io_temperature", 
                public vmList: VMList = null) {
                // public remoteMemConsumptionByVM: string 

    }
}

export class VMList {
    vmList: VM[];

    addVM(vm: VM) {
        this.vmList.push(vm);
    }
}

export class VM {
    constructor(public listOfProviders: ProviderList_In_ClusterView, 
                public rmUsage: string, 
                public numberOfSwapOuts: number,
                public numberOfSwapIns: number) {

    }
}

