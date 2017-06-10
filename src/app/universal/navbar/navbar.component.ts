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

    collapseNavbar() {
        if (this.windowWidth() <= 991) {
            $(".navbar-toggler").click();
        }
    }

    static runAllOnce() {
        NavbarComponent.setNavbarHeight();
        if ($(window).width() <= 991) {
            NavbarComponent.setButtonListener();
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
            NavbarComponent.setButtonListener();
        }
    }

    windowWidth() {
        return $(window).width();
    }

    windowHeight() {
        return $(window).height();
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
