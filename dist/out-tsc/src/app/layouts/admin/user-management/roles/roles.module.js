import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { CreateRolesComponent } from './create-roles/create-roles.component';
import { ReactiveFormsModule } from '@angular/forms';
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    NgModule({
        declarations: [RolesComponent, RolesListComponent, CreateRolesComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            RolesRoutingModule
        ]
    })
], RolesModule);
export { RolesModule };
//# sourceMappingURL=roles.module.js.map