import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import * as $ from 'jquery';
@Component(
    {
        selector: 'app-index',
        templateUrl: './index.component.html',
        styleUrls: ['./index.component.css']

    }
)
export class IndexComponent implements OnInit, AfterViewInit {

    public constructor(private titleService: Title) {
    }

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    ngOnInit() {
        this.setTitle('eLearning Homepage');

    }



    ngAfterViewInit() {

    }

}
