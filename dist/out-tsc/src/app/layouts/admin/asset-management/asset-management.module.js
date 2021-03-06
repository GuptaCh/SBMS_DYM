import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetManagementRoutingModule } from './asset-management-routing.module';
import { AssetManagementComponent } from './asset-management.component';
import { AddAssetCategoryComponent } from './add-asset-category/add-asset-category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditAsetCategoryComponent } from './edit-aset-category/edit-aset-category.component';
let AssetManagementModule = class AssetManagementModule {
};
AssetManagementModule = __decorate([
    NgModule({
        declarations: [AssetManagementComponent, AddAssetCategoryComponent, CategoryListComponent, EditAsetCategoryComponent],
        imports: [
            CommonModule,
            ReactiveFormsModule,
            AssetManagementRoutingModule
        ]
    })
], AssetManagementModule);
export { AssetManagementModule };
//# sourceMappingURL=asset-management.module.js.map