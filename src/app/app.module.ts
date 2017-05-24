import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {IndexComponent} from "./pages/index/index.component";
import {NavbarComponent} from "./universal/navbar/navbar.component";
import {FooterComponent} from "./universal/footer/footer.component";
import {CoachesComponent} from "./pages/coaches/coaches.component";
import {RouterModule} from "@angular/router";
import {CoachesCoachdirComponent} from "./pages/coaches/coaches-coachdir/coaches-coachdir.component";
import {ClassesComponent} from "./pages/classes/classes.component";
import {CourseListComponent} from "./pages/classes/course-list/course-list.component";
import {CourseFilterPipe} from "./pages/classes/course-list/pipes/course-filter.pipe";
import {SubjectFilterPipe} from "./pages/classes/course-list/pipes/subject-filter.pipe";
import {ProfileComponent} from "./pages/profile/profile.component";
import {ProfileUserInfoComponent} from "./pages/profile/profile-user-info/profile-user-info.component";

@NgModule(
    {
        declarations: [
            AppComponent,
            IndexComponent,
            NavbarComponent,
            FooterComponent,
            CoachesComponent,
            CoachesCoachdirComponent,
            ClassesComponent,
            CourseListComponent,
            CourseFilterPipe,
            SubjectFilterPipe,
            ProfileComponent,
            ProfileUserInfoComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(
                [
                    {
                        path: '',
                        component: IndexComponent
                    },
                    {
                        path: 'about',
                        component: IndexComponent
                    },
                    {
                        path: 'coaches',
                        component: CoachesComponent
                    },
                    {
                        path: 'classes',
                        component: ClassesComponent
                    },
                    {
                        path: 'profile',
                        component: ProfileComponent
                    }

                ]
            )
        ],
        providers: [],
        bootstrap: [AppComponent]
    }
)
export class AppModule {
}
