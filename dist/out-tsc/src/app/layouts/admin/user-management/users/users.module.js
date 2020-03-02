import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserlistComponent } from './userlist/userlist.component';
import { CreateUsersComponent } from './create-users/create-users.component';
import { ReactiveFormsModule } from '@angular/forms';
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    NgModule({
        declarations: [UsersComponent, UserlistComponent, CreateUsersComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            UsersRoutingModule
        ]
    })
], UsersModule);
export { UsersModule };
//# sourceMappingURL=users.module.js.map