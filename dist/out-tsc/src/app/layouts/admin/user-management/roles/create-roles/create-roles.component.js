import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
let CreateRolesComponent = class CreateRolesComponent {
    constructor(fb, roleService, router) {
        this.fb = fb;
        this.roleService = roleService;
        this.router = router;
        this.permissions = [];
        this.initCreateRole();
    }
    ngOnInit() {
        this.roleService.getPermissions().subscribe();
        this.getpermissionsFromService();
    }
    getpermissionsFromService() {
        this.roleService.permissionList.subscribe(val => {
            console.log("val", val);
            if (val.length != 0) {
                this.permissions = val;
            }
        });
    }
    initCreateRole() {
        this.createRole = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
            aliasName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
            description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
            permissions: this.fb.array(this.permissions, [Validators.required]),
        });
    }
    onCheckboxChange(e) {
        const permissions = this.createRole.get('permissions');
        if (e.target.checked) {
            permissions.push(new FormControl(e.target.value));
        }
        else {
            let i = 0;
            permissions.controls.forEach((item) => {
                if (item.value == e.target.value) {
                    permissions.removeAt(i);
                    return;
                }
                i++;
            });
        }
    }
    loadingFalse() {
        this.loading = false;
    }
    sendCreateRole() {
        this.loading = true;
        console.log(this.createRole.value);
        if (this.createRole.invalid) {
            this.loading = false;
            return;
        }
        this.roleService.createRole(this.createRole.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/user-management/roles/roles-list']);
        }, complete => {
            this.loadingFalse();
        });
    }
};
CreateRolesComponent = __decorate([
    Component({
        selector: 'app-create-roles',
        templateUrl: './create-roles.component.html',
        styleUrls: ['./create-roles.component.css']
    })
], CreateRolesComponent);
export { CreateRolesComponent };
//# sourceMappingURL=create-roles.component.js.map