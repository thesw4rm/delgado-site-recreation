import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CalendarComponent} from "./calendar.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: 'calendar',
                    component: CalendarComponent
                }
            ]
        )
    ],
    declarations: [
        CalendarComponent
    ]
})
export class CalendarModule {
}