import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';
let AssetService = class AssetService {
    constructor(ip, http, errHandler) {
        this.ip = ip;
        this.http = http;
        this.errHandler = errHandler;
        this.Ip = "http://192.168.10.81:";
        this.baseUrl = '/rest/v1/assetCategory';
        this.copyEditAssertCategory = new Subject();
        this.assetCategoryList = new BehaviorSubject(null);
    }
    /* create asset */
    createAssetCategory(categoty) {
        console.log("categoty", categoty);
        return this.http.post(`${this.ip.ip}${this.ip.asset_Port}${this.baseUrl}/assetCategories`, categoty)
            .pipe(catchError(this.errHandler.handleError));
    }
    /* asset category list */
    getAssetCategoryList() {
        return this.http.get(`${this.ip.ip}${this.ip.asset_Port}${this.baseUrl}/getAllAssetCategories`)
            .pipe(map(res => {
            this.assetCategoryList.next(res);
        }), catchError(this.errHandler.handleError));
    }
    /* Edit Category */
    editAssetCategory(categoty) {
        console.log("edit categoty", categoty);
        return this.http.put(`${this.ip.ip}${this.ip.asset_Port}${this.baseUrl}/updateAssetCategory`, categoty)
            .pipe(catchError(this.errHandler.handleError));
    }
    /* Delete asset category */
    deleteAssetCategory(id) {
        return this.http.delete(`${this.ip.ip}${this.ip.asset_Port}${this.baseUrl}/assetCategories/${id}`)
            .pipe(catchError(this.errHandler.handleError));
    }
};
AssetService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AssetService);
export { AssetService };
//# sourceMappingURL=asset.service.js.map