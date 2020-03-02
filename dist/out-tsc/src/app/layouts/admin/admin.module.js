import { __decorate } from "tslib";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { ComponentsModule } from 'src/app/components/components.module';
let AdminModule = class AdminModule {
};
AdminModule = __decorate([
    NgModule({
        declarations: [AdminComponent],
        imports: [
            CommonModule,
            AdminRoutingModule,
            ComponentsModule
        ],
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map