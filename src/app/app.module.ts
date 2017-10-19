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


const appRoutes = [
  { path: '', component: HomePageComponent },
  { path: 'setup', component: SetupPageComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SearchPipe,
    HomePageComponent,
    SetupPageComponent
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
