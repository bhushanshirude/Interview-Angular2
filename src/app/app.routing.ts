import { ModuleWithProviders, Component } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { TestComponent } from './test.component';
import { QuesComponent } from './ques.component';

export const routes: Routes = [
    // Client side        
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: "child", component: TestComponent },
            { path: "start/:_id", component: QuesComponent },
        ]
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);