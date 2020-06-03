import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapComponent } from './google-map/google-map.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";


@NgModule({
    declarations: [
        GoogleMapComponent,
        DropdownComponent,
        TableComponent
    ],
    imports: [
        CommonModule,
        NgbModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        GoogleMapComponent,
        DropdownComponent,
        TableComponent
    ]
})



export class SharedModule {

}