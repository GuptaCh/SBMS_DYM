import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let EditAsetCategoryComponent = class EditAsetCategoryComponent {
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
            assetCategoryId: ['', [Validators.required]],
            categoryName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(this.maxLen.categoryName)]],
            description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(this.maxLen.description)]],
        });
    }
    ngOnInit() {
        this.assetService.copyEditAssertCategory.subscribe(result => {
            this.addAssetCategory.controls['categoryName'].setValue(result.categoryName);
            this.addAssetCategory.controls['description'].setValue(result.description);
            this.addAssetCategory.controls['assetCategoryId'].setValue(result.assetCategoryId);
        });
    }
    get f() {
        return this.addAssetCategory.controls;
    }
    editAssetCategory() {
        console.log(this.addAssetCategory.value);
        if (this.addAssetCategory.invalid) {
            this.toastr.error("Please fill all mandatory fields.", "Error");
            return;
        }
        this.assetService.editAssetCategory(this.addAssetCategory.value).subscribe(res => {
            console.log(res);
            this.toastr.success("Edit asset category successfull.", "Success");
            this.addAssetCategory.reset();
            this.assetService.getAssetCategoryList().subscribe();
            $(document).ready(function () {
                $(".close").click();
            });
        }, err => {
            console.log(err);
            this.toastr.error("Some thing went worng.", "Error");
        });
    }
};
EditAsetCategoryComponent = __decorate([
    Component({
        selector: 'app-edit-aset-category',
        templateUrl: './edit-aset-category.component.html',
        styleUrls: ['./edit-aset-category.component.css']
    })
], EditAsetCategoryComponent);
export { EditAsetCategoryComponent };
//# sourceMappingURL=edit-aset-category.component.js.map