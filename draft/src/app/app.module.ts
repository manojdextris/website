import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepages/navbar/navbar.component';
import { FooterComponent } from './sharepages/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { BfsiComponent } from './industries/bfsi/bfsi.component';
import { EcommerceComponent } from './industries/ecommerce/ecommerce.component';
import { LifescienceComponent } from './industries/lifescience/lifescience.component';
import { HealthcareComponent } from './industries/healthcare/healthcare.component';
import { ErpComponent } from './industries/erp/erp.component';
import { ConsultingComponent } from './sourservices/consulting/consulting.component';
import { StaffaugmentationComponent } from './sourservices/staffaugmentation/staffaugmentation.component';
import { SoftwaredevelopmentComponent } from './sourservices/softwaredevelopment/softwaredevelopment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    JoinusComponent,
    ContactusComponent,
    BfsiComponent,
    EcommerceComponent,
    LifescienceComponent,
    HealthcareComponent,
    ErpComponent,
    ConsultingComponent,
    StaffaugmentationComponent,
    SoftwaredevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
