import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { UserService } from './user.service';
import { SearchPipe } from './search.pipe';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SinglePageComponent } from './single-page/single-page.component';


const appRoutes = [
  { path: '', component: HomePageComponent },
  { path: ':id/:name/:geo/:img', component: SinglePageComponent },
  { path: 'setup', component: SetupPageComponent },
  { path: '**', component: NotFoundComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent,
    NotFoundComponent,
    SinglePageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
