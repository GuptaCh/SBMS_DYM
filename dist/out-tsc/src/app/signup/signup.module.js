import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { NumbersOnlyDirective } from '../share/Directives/numbers-only.directive';
let SignupModule = class SignupModule {
};
SignupModule = __decorate([
    NgModule({
        declarations: [SignupComponent, NumbersOnlyDirective],
        imports: [
            CommonModule,
            SignupRoutingModule,
            ReactiveFormsModule,
            MatInputModule,
            MatDatepickerModule,
            MatNativeDateModule,
        ],
        providers: [
            { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
        ]
    })
], SignupModule);
export { SignupModule };
//# sourceMappingURL=signup.module.js.map