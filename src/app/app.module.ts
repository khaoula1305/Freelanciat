import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { TeamComponent } from './team/team.component';

import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { TeamViewComponent } from './team-view/team-view.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path:'teams',component:TeamViewComponent},
  { path: 'services', component: ServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: TeamViewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    TeamComponent,
    ContactComponent,
    TeamViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
