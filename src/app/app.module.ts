import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {AppComponent} from "./app.component";
import {NavbarComponent} from "./universal/navbar/navbar.component";
import {FooterComponent} from "./universal/footer/footer.component";
import {RouterModule} from "@angular/router";
import {ProfileModule} from "./pages/profile/profile.module";
import {BlogModule} from "./pages/blog/blog.module";
import {ClassesModule} from "./pages/classes/classes.module";
import {IndexModule} from "./pages/index/index.module";
import {AboutModule} from "./pages/about/about.module";
import {CalendarModule} from "./pages/calendar/calendar.module";
import {CoachesModule} from "./pages/coaches/coaches.module";


@NgModule(
    {
        declarations: [
            AppComponent,
            NavbarComponent,
            FooterComponent,
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            ProfileModule,
            BlogModule,
            ClassesModule,
            IndexModule,
            AboutModule,
            CalendarModule,
            CoachesModule,
            RouterModule.forRoot(
                [
                    {
                        path: '',
                        loadChildren: 'app/pages/index/index.module.ts#IndexModule'
                    },
                    {
                        path: 'about',
                        loadChildren: 'app/pages/about/about.module.ts#AboutModule'
                    },
                    {
                        path: 'coaches',
                        loadChildren: 'app/pages/coaches/coaches.module.ts#CoachesModule'
                    },
                    {
                        path: 'classes',
                        loadChildren: 'app/pages/classes/classes.module.ts#ClassesModule'
                    },
                    {
                        path: 'profile',
                        loadChildren: 'app/pages/profile/profile.module.ts#ProfileModule'
                    },
                    {
                        path: 'calendar',
                        loadChildren: 'app/pages/calendar/calendar.module.ts#CalendarModule'

                    },
                    {
                        path: 'blog',
                        loadChildren: 'app/pages/blog/blog.module.ts#BlogModule'
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
