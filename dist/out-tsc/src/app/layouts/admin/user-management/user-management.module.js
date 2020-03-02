import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import { UserManagementComponent } from './user-management.component';
import { ReactiveFormsModule } from '@angular/forms';
let UserManagementModule = class UserManagementModule {
};
UserManagementModule = __decorate([
    NgModule({
        declarations: [UserManagementComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            UserManagementRoutingModule
        ]
    })
], UserManagementModule);
export { UserManagementModule };
//# sourceMappingURL=user-management.module.js.map