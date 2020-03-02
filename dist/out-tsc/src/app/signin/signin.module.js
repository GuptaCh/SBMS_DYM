import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
let SigninModule = class SigninModule {
};
SigninModule = __decorate([
    NgModule({
        declarations: [SigninComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            SigninRoutingModule
        ]
    })
], SigninModule);
export { SigninModule };
//# sourceMappingURL=signin.module.js.map