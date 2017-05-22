import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from "@angular/core";
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
export class CoachesCoachdirComponent implements OnInit, AfterViewChecked {
    coaches: Coach[];
    count: number;

    constructor(private coachService: CoachesCoachdirService) {
        this.count = 0;
    }

    incrementCount() {
        this.count += 1;
        return this.count;
    }

    getCoaches() {
        this.coachService.getCoaches().subscribe(
            coaches => this.coaches = coaches,
        );
    }

    setCardRotation() {
        $('.rotate-btn').on('click', function () {
            const t = $(this).attr('data-card');
            $('#' + t).toggleClass('flipped');
        });
    }

    ngOnInit() {
        this.getCoaches();

    }

    ngAfterViewChecked() {
        this.setCardRotation();
    }

}
