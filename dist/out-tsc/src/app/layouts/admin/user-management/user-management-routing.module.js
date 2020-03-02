import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserManagementComponent } from './user-management.component';
const routes = [
    {
        path: '', component: UserManagementComponent, children: [
            { path: '', redirectTo: 'roles' },
            { path: 'permissions', loadChildren: () => import('./permissions/permissions.module').then(m => m.PermissionsModule) },
            { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) },
            { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
        ]
    }
];
let UserManagementRoutingModule = class UserManagementRoutingModule {
};
UserManagementRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UserManagementRoutingModule);
export { UserManagementRoutingModule };
//# sourceMappingURL=user-management-routing.module.js.map