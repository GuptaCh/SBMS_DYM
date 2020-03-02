import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let AddAssetCategoryComponent = class AddAssetCategoryComponent {
    constructor(fb, assetService, toastr, router) {
        this.fb = fb;
        this.assetService = assetService;
        this.toastr = toastr;
        this.router = router;
        this.maxLen = {
            categoryName: 16,
            description: 200
        };
        this.addAssetCategory = this.fb.group({
            categoryName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(this.maxLen.categoryName)]],
            description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxLen.description)]],
        });
    }
    ngOnInit() {
    }
    get f() {
        return this.addAssetCategory.controls;
    }
    createAssetCategory() {
        console.log(this.addAssetCategory.value);
        if (this.addAssetCategory.invalid) {
            this.toastr.error("Please fill all mandatory fields.", "Error");
            return;
        }
        this.assetService.createAssetCategory(this.addAssetCategory.value).subscribe(res => {
            console.log(res);
            this.toastr.success("Create asset successfull.", "Success");
            this.addAssetCategory.reset();
            this.router.navigate(['/assert-management/catagory-List']);
        }, err => {
            console.log(err);
            this.toastr.error("Some thing went worng.", "Error");
        });
    }
};
AddAssetCategoryComponent = __decorate([
    Component({
        selector: 'app-add-asset-category',
        templateUrl: './add-asset-category.component.html',
        styleUrls: ['./add-asset-category.component.css']
    })
], AddAssetCategoryComponent);
export { AddAssetCategoryComponent };
//# sourceMappingURL=add-asset-category.component.js.map