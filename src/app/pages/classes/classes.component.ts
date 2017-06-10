import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
               selector: 'app-catalog',
               templateUrl: './classes.component.html',
               styleUrls: ['./classes.component.css']
           })
export class ClassesComponent implements OnInit {

    constructor(private titleService: Title) {
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }
    ngOnInit() {
        this.setTitle('eLearn Course Directory');
    }

}
