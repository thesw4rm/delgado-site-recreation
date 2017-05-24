import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
               selector: 'app-navbar',
               templateUrl: './navbar.component.html',
               styleUrls: ['./navbar.component.css']
           })
export class NavbarComponent implements OnInit {
    username: string;

    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        NavbarComponent.runAllOnce();
        $(window).resize(
            NavbarComponent.resizeFunction
        );
    }

    static runAllOnce() {
        NavbarComponent.setNavbarHeight();
        if ($(window).width() <= 991) {
            this.setButtonListener();
        }
    }

    static setButtonListener() {
        $(".navbar-toggler").click(
            function () {
                //Aria expanded takes time to transition, so when it is false it's actually about to become true
                if ($(this).attr('aria-expanded') === "false") {
                    $(".navbar").removeAttr("style");
                    console.log("YEEEEET");
                }
                else {
                    $(".navbar").css('height', $('.navbar-toggler').height() * 2);
                }
            }
        );
    }

    static resizeFunction() {
        NavbarComponent.setNavbarHeight();
        if ($(window).width() <= 991) {
            this.setButtonListener();
        }
    }

    static setNavbarHeight(): void {
        if ($(window).width() <= 991) {
            $(".navbar").css('height', $('.navbar-toggler').height() * 2);
        }
        else {
            $(".navbar").removeAttr('style');
        }
    }
}
