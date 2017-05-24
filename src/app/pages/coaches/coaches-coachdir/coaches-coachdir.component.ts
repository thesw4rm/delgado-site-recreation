import {Component, OnInit} from "@angular/core";
import {CoachesCoachdirService} from "./coaches-coachdir.service";
import {Coach} from "./coach";


@Component(
    {
        selector: 'app-coaches-coachdir',
        templateUrl: './coaches-coachdir.component.html',
        styleUrls: ['./coaches-coachdir.component.css'],
        providers: [
            CoachesCoachdirService
        ]
    }
)
export class CoachesCoachdirComponent implements OnInit {
    coaches: Coach[];
    count = 0;
    countNum = 1;

    constructor(private coachService: CoachesCoachdirService) {
    }

    incrementCount() {
        this.count += 1;
        console.log("CALLED: " + this.count);
        return this.count;
    }

    getCoaches() {
        this.coachService.getCoaches().subscribe(
            coaches => this.coaches = coaches,
        );
    }


    openCard(value): void {
        let el = $('#' + $(value).attr('data-card'));
        while (!el) {
            el = $('#' + $(value).attr('data-card'));
        }
        console.log(el);
        el.addClass('flipped');
    }

    closeCard(value): void {
        let el = $('#' + $(value).attr('data-card'));
        while (!el) {
            console.log("SEARCHING");
            el = $('#' + $(value).attr('data-card'));
        }
        el.removeClass('flipped');

    }

    ngOnInit() {
        this.getCoaches();
        console.log(this.count);

    }


}
