import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssetManagementComponent } from './asset-management.component';
import { AddAssetCategoryComponent } from './add-asset-category/add-asset-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
const routes = [
    {
        path: '', component: AssetManagementComponent, children: [
            { path: '', redirectTo: 'catagory-List' },
            { path: 'add-asset-category', component: AddAssetCategoryComponent },
            { path: 'catagory-List', component: CategoryListComponent }
        ]
    }
];
let AssetManagementRoutingModule = class AssetManagementRoutingModule {
};
AssetManagementRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], AssetManagementRoutingModule);
export { AssetManagementRoutingModule };
//# sourceMappingURL=asset-management-routing.module.js.map