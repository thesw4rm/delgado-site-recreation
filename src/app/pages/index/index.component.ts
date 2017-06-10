import {AfterViewInit, Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import * as $ from "jquery";
@Component(
    {
        selector: 'app-index',
        templateUrl: './index.component.html',
        styleUrls: ['./index.component.css']

    }
)
export class IndexComponent implements OnInit, AfterViewInit {
    img_height: number;
    img_width: number;

    public constructor(private titleService: Title) {

    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    ngOnInit() {
        this.setTitle('eLearning Homepage');
        this.setImageSize();
        $(window).resize(this.setImageSize);

    }

    setImageSize() {
        this.img_height = 560 / 1.5 / 1903 * $(window).width();
        this.img_width = 712 / 1.5 / 1903 * $(window).width();
    }

    ngAfterViewInit() {

    }

}
