import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SigninComponent } from './signin.component';
const routes = [
    { path: '', component: SigninComponent }
];
let SigninRoutingModule = class SigninRoutingModule {
};
SigninRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], SigninRoutingModule);
export { SigninRoutingModule };
//# sourceMappingURL=signin-routing.module.js.map