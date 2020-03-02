import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './layouts/admin/admin.component';
const routes = [
    { path: 'signIn', loadChildren: () => import('./signin/signin.module').then(m => m.SigninModule) },
    {
        path: '', component: AdminComponent,
        children: [
            { path: '', loadChildren: () => import('./layouts/admin/admin.module').then(m => m.AdminModule) }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map