import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {ProfileComponent} from "./profile.component";
import {ProfileUserInfoComponent} from "./profile-user-info/profile-user-info.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(
            [
                {
                    path: 'profile',
                    component: ProfileComponent
                }
            ]
        )
    ],
    declarations: [
        ProfileComponent,
        ProfileUserInfoComponent
    ]
})
export class ProfileModule {
}