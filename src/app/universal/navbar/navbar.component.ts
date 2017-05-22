import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
               selector: 'app-navbar',
               templateUrl: './navbar.component.html',
               styleUrls: ['./navbar.component.css']
           })
export class NavbarComponent {
    username: string;

    constructor(private activatedRoute: ActivatedRoute) {
    }


}
