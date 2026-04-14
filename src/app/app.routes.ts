import { Routes } from '@angular/router';
import { Cards } from './component/cards/cards';
import { Form } from './pages/form/form';
import { Pagenotfound } from './pages/pagenotfound/pagenotfound';

export const routes: Routes = [
    {path:'', component:Cards},
    {path:'form', component:Form},
    { path: 'form/:id', component: Form },
    {path:'**',component:Pagenotfound}
];
