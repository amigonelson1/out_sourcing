import { Routes } from '@angular/router';
import { ManejoArchivoComponent } from './manejo-archivo/manejo-archivo.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'archivo', component: ManejoArchivoComponent},
    {path:'home', component: HomeComponent},
    {path:'*', redirectTo: 'home'},
];
