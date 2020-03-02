import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CategoryListComponent = class CategoryListComponent {
    constructor(assetService, toastr) {
        this.assetService = assetService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.getCategoryList();
        this.subcribe();
    }
    subcribe() {
        this.assetService.assetCategoryList.subscribe(res => {
            this.assetCategoryList = res;
        });
    }
    getCategoryList() {
        this.assetService.getAssetCategoryList().subscribe(res => {
            this.assetCategoryList = this.assetService.assetCategoryList.value;
            console.log(res);
        }, err => {
            console.log(err);
        });
    }
    Edit(item) {
        this.assetService.copyEditAssertCategory.next(item);
    }
    copyDelete(item) {
        this.copyDeleteItem = item;
    }
    deleteAssetCategory() {
        this.assetService.deleteAssetCategory(this.copyDeleteItem.assetCategoryId).subscribe(res => {
            this.toastr.success(`${this.copyDeleteItem.categoryName} deleted successfull`, "Success");
            this.getCategoryList();
        });
    }
};
CategoryListComponent = __decorate([
    Component({
        selector: 'app-category-list',
        templateUrl: './category-list.component.html',
        styleUrls: ['./category-list.component.css']
    })
], CategoryListComponent);
export { CategoryListComponent };
//# sourceMappingURL=category-list.component.js.map