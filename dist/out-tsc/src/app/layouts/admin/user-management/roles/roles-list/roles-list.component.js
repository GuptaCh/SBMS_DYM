import { __decorate } from "tslib";
import { Component } from '@angular/core';
let RolesListComponent = class RolesListComponent {
    constructor(roleService) {
        this.roleService = roleService;
    }
    ngOnInit() {
        this.getrolesList();
        this.subRoleListFromService();
    }
    getrolesList() {
        this.roleService.getRoleList().subscribe();
        this.roleList = this.roleService.roleList.value;
        console.log(this.roleList);
    }
    subRoleListFromService() {
        this.roleService.roleList.subscribe(val => {
            if (val.length != 0) {
                this.roleList = val;
            }
        });
    }
};
RolesListComponent = __decorate([
    Component({
        selector: 'app-roles-list',
        templateUrl: './roles-list.component.html',
        styleUrls: ['./roles-list.component.css']
    })
], RolesListComponent);
export { RolesListComponent };
//# sourceMappingURL=roles-list.component.js.map