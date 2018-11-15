
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/components/home/home.component';
import { AboutComponent } from '../app/components/about/about.component';



const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'videos', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const APPROUTING = RouterModule.forRoot(ROUTES, {useHash:true});