import { Routes } from '@angular/router';
import { Allproducts } from './allproducts/allproducts';
import { Singlecopm } from './singlecopm/singlecopm';
import { Login } from './pages/login/login';

export const routes: Routes = [
    {path: '', pathMatch: 'full', component: Login
    },
    {path:'',component:Login},
    {path:'allposts',component:Allproducts},
    {path:'singlepost/:postid',component:Singlecopm},
    {path:'**',redirectTo:'allposts'}
];
