import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SiblingInteractionService {

  selected = ''
  entityID = ''

  constructor() { }

  eventNotifier: EventEmitter<string> = new EventEmitter(); 

}
