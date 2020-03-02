import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateUsersComponent } from './create-users/create-users.component';
const routes = [
    {
        path: '', component: UsersComponent, children: [
            { path: '', redirectTo: 'users-list' },
            { path: 'users-list', component: UserlistComponent },
            { path: 'create-users', component: CreateUsersComponent }
        ]
    }
];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], UsersRoutingModule);
export { UsersRoutingModule };
//# sourceMappingURL=users-routing.module.js.map