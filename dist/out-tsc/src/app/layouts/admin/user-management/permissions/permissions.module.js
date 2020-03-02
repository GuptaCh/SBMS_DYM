import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionsRoutingModule } from './permissions-routing.module';
import { CreatePermissionsComponent } from './create-permissions/create-permissions.component';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PermissionsComponent } from './permissions.component';
let PermissionsModule = class PermissionsModule {
};
PermissionsModule = __decorate([
    NgModule({
        declarations: [CreatePermissionsComponent, PermissionsListComponent, PermissionsComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            PermissionsRoutingModule
        ]
    })
], PermissionsModule);
export { PermissionsModule };
//# sourceMappingURL=permissions.module.js.map