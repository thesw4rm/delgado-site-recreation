import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {CoachesComponent} from "./coaches.component";
import {CoachesCoachdirComponent} from "./coaches-coachdir/coaches-coachdir.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: 'coaches',
                    component: CoachesComponent
                },
            ]
        )
    ],
    declarations: [
        CoachesComponent,
        CoachesCoachdirComponent
    ]
})
export class CoachesModule {
}