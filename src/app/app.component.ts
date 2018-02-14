import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SiblingInteractionService } from 'app/sibling-interaction.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [SiblingInteractionService]
})
export class AppComponent {
    constructor(private router: Router) {
    }

}
