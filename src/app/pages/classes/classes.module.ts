import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ClassesComponent} from "./classes.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {SubjectFilterPipe} from "./course-list/pipes/subject-filter.pipe";
import {CourseFilterPipe} from "./course-list/pipes/course-filter.pipe";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: 'classes',
                    component: ClassesComponent
                }
            ]
        )
    ],
    declarations: [
        CourseFilterPipe,
        SubjectFilterPipe,
        ClassesComponent,
        CourseListComponent,
    ]
})
export class ClassesModule {
}