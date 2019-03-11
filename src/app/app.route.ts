import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './components/heroes/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';


const app_routes: Routes = [
    { path: 'heroes', component: HeroesComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full',redirectTo:'heroes' }
];

export const APP_ROUTING= RouterModule.forRoot(app_routes);