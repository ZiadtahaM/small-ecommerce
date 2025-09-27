import { Routes } from '@angular/router';
import { Allproducts } from './allproducts/allproducts';
import { Singlecopm } from './singlecopm/singlecopm';

export const routes: Routes = [
    {path:'allposts',component:Allproducts},
    {path:'singlepost/:postid',component:Singlecopm},
    {path:'**',redirectTo:'allposts'}
];
