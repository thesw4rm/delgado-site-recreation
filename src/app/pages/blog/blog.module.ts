import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {BlogComponent} from "./blog.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: 'blog',
                    component: BlogComponent
                }
            ]
        )
    ],
    declarations: [
        BlogComponent
    ]
})
export class BlogModule {
}