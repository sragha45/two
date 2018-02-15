import { Injectable } from "@angular/core";


export class Provider_In_ClusterView {
    constructor(public ip: string = "IP Address", 
                public io_bandwidth: string = "IO Bandwidth", 
                public remoteMemoryContribution: string = "remoteMemoryContribution") {
    }
}


export class Consumer_In_ClusterView {
    constructor(public ip: string = "IP Address", 
                public io_bandwidth : string = "IO Bandwidth"){

    }
}

export class Provider_In_ProviderView {
    constructor(public remoteMemoryContribution: string = "remoteOfProvider",
                public consumerList: Consumer_In_ClusterView[] = null) {
        
    }
}

export class Consumer_In_ConsumerView {
    constructor(public remoteMemoryUsage: string = "remoteMemUsage", 
                public listOfProviders: Provider_In_ClusterView[] = null,
                public io_temperature: string = "io_temperature", 
                public vmList: string[] = null) {
                // public remoteMemConsumptionByVM: string 

    }
}


export class VM {
    constructor(public id: string,
                public listOfProviders: string[], 
                public rmUsage: string, 
                public numberOfSwapOuts: number,
                public numberOfSwapIns: number) {

    }
}
export class ClusterDetails {
    constructor(public providerList: Provider_In_ClusterView[] = null,
                public consumerList: Consumer_In_ClusterView[] = null,
                public remoteMemoryUtil: string = "",
                public RDMAUtilization: string = "",
                public io_bandwidth: string = "") {}

}

export class Cluster {
    constructor(public id: string = "",
                public details: ClusterDetails = null) {

                }
}

export class Provider {
    constructor(public ip: string = "",
                public details: Provider_In_ProviderView = null) {}
}

export class Consumer {
    constructor(public ip: string = "",
                public details: Consumer_In_ConsumerView = null) {}
}

