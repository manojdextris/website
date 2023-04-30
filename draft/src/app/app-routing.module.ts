import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { JoinusComponent } from './pages/joinus/joinus.component';
import { BfsiComponent } from './industries/bfsi/bfsi.component';
import { EcommerceComponent } from './industries/ecommerce/ecommerce.component';
import { LifescienceComponent } from './industries/lifescience/lifescience.component';
import { HealthcareComponent } from './industries/healthcare/healthcare.component';
import { ErpComponent } from './industries/erp/erp.component';
import { ConsultingComponent } from './sourservices/consulting/consulting.component';
import { StaffaugmentationComponent } from './sourservices/staffaugmentation/staffaugmentation.component';
import { SoftwaredevelopmentComponent } from './sourservices/softwaredevelopment/softwaredevelopment.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'joinus',component:JoinusComponent}  ,
  {path:'bfsi',component:BfsiComponent},
  {path:'ecommerce',component:EcommerceComponent},
  {path:'lifescience',component:LifescienceComponent},
  {path:'healthcare',component:HealthcareComponent},
  {path:'erp',component:ErpComponent},
  {path:'consulting',component:ConsultingComponent},
  {path:'staff',component:StaffaugmentationComponent},
  {path:'software',component:SoftwaredevelopmentComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
