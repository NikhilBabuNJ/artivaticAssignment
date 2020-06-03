import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardBaseComponent } from './components/dashboard-base/dashboard-base.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardService } from './services/dashboard.service';

import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        DashboardBaseComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        HttpClientModule,
        SharedModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [
        DashboardService
    ]
})


export class DashboardModule { }