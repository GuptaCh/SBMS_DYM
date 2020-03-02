import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PermissionsComponent } from './permissions.component';
import { PermissionsListComponent } from './permissions-list/permissions-list.component';
import { CreatePermissionsComponent } from './create-permissions/create-permissions.component';
const routes = [
    {
        path: '', component: PermissionsComponent, children: [
            { path: '', redirectTo: 'permissions-list' },
            { path: 'permissions-list', component: PermissionsListComponent },
            { path: 'create-permissions', component: CreatePermissionsComponent }
        ]
    }
];
let PermissionsRoutingModule = class PermissionsRoutingModule {
};
PermissionsRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], PermissionsRoutingModule);
export { PermissionsRoutingModule };
//# sourceMappingURL=permissions-routing.module.js.map