import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: 'home',
        component: HomePageComponent
    },

    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);
