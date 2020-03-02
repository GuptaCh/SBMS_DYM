import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let CreatePermissionsComponent = class CreatePermissionsComponent {
    constructor(fb, roleService, router) {
        this.fb = fb;
        this.roleService = roleService;
        this.router = router;
        this.permission = this.fb.group({
            name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
            description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
        });
    }
    ngOnInit() {
    }
    loadingfalse() {
        this.loading = false;
    }
    createPermissions() {
        this.loading = true;
        if (this.permission.invalid)
            return;
        this.roleService.createPermission(this.permission.value).subscribe(res => {
            console.log(res);
            this.router.navigate(['/user-management/permissions/permissions-list']);
        }, complete => {
            this.loadingfalse();
        });
    }
};
CreatePermissionsComponent = __decorate([
    Component({
        selector: 'app-create-permissions',
        templateUrl: './create-permissions.component.html',
        styleUrls: ['./create-permissions.component.css']
    })
], CreatePermissionsComponent);
export { CreatePermissionsComponent };
//# sourceMappingURL=create-permissions.component.js.map