import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PermissionsListComponent = class PermissionsListComponent {
    constructor(roleService) {
        this.roleService = roleService;
        this.subscribePermissionsList();
    }
    ngOnInit() {
        this.getPermisiionsList();
    }
    getPermisiionsList() {
        this.roleService.getPermissions().subscribe(res => {
            console.log(res);
            console.log("res per", res);
            if (res != null) {
                this.permissionsList = res;
            }
        });
        this.permissionsList = this.roleService.permissionList.value;
    }
    subscribePermissionsList() {
        this.roleService.permissionList.subscribe(val => {
            if (val != null)
                this.permissionsList = val;
        });
        console.log(this.permissionsList);
    }
};
PermissionsListComponent = __decorate([
    Component({
        selector: 'app-permissions-list',
        templateUrl: './permissions-list.component.html',
        styleUrls: ['./permissions-list.component.css']
    })
], PermissionsListComponent);
export { PermissionsListComponent };
//# sourceMappingURL=permissions-list.component.js.map