import {AfterViewInit, Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";


@Component({
               selector: 'app-coaches',
               templateUrl: './coaches.component.html',
               styleUrls: ['./coaches.component.css']
           })
export class CoachesComponent implements AfterViewInit, OnInit {
    constructor(private titleService: Title) {
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    ngOnInit() {
        this.setTitle('eLearning Coach Directory');
    }

    ngAfterViewInit() {

    }

}
