import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RolesComponent } from './roles.component';
import { RolesListComponent } from './roles-list/roles-list.component';
import { CreateRolesComponent } from './create-roles/create-roles.component';
const routes = [
    {
        path: '', component: RolesComponent, children: [
            { path: '', redirectTo: 'roles-list' },
            { path: 'roles-list', component: RolesListComponent },
            { path: 'create-roles', component: CreateRolesComponent }
        ]
    }
];
let RolesRoutingModule = class RolesRoutingModule {
};
RolesRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], RolesRoutingModule);
export { RolesRoutingModule };
//# sourceMappingURL=roles-routing.module.js.map