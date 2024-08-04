import { DashboardComponent } from './dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'  },
    {path: "dashboard" , component:DashboardComponent , title: "Dashboard" } ,
    {path: "about" , component:AboutComponent , title: "About"} ,
    {path: "protfolio" , component:ProtfolioComponent , title: "Protofilio"} ,
    {path: "contact" , component:ContactComponent , title: "Contact"} ,
    {path: "gallery" , component:GalleryComponent , title: "Gallery"}

];
