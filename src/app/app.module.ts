import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ViewComponent } from './view/view.component';
import { QueryComponent } from './query/query.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RouterModule,Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes =[		
  {path:'Appointment' , component:AppointmentComponent},
  {path:'View', component:ViewComponent},
  {path:'Query', component: QueryComponent},
  {path:'Feedback', component: FeedbackComponent},
  {path:'Home', component: HomepageComponent},
  {path:'Contact', component:ContactComponent}


  
  

  ];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AppointmentComponent,
    ViewComponent,
    QueryComponent,
    FeedbackComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
