import { Routes } from '@angular/router';
import { Allproducts } from './allproducts/allproducts';
import { Singlecopm } from './singlecopm/singlecopm';
import { Login } from './pages/login/login';
import { Reallogin } from './pages/reallogin/reallogin';
import { Adrresslist } from './adrresslist/adrresslist';

export const routes: Routes = [
    // Redirect the base URL to the login page.
    // This is often the entry point of an application.
    {
        path: '',
        pathMatch: 'full',
        component: Login
    },

    // Your application-specific routes
    {
        path: 'allposts',
        component: Allproducts
    },
    {
        path: 'singlepost/:postid',
        component: Singlecopm
    },
    {
        path: 'profile/:id',
        component: Reallogin
    },{path:'list',component:Adrresslist},

    // Wildcard route for handling any unmatched URLs.
    // It redirects to 'allposts', which acts as a fallback page.
    {
        path: '**',
        redirectTo: 'allposts'
    }

];
