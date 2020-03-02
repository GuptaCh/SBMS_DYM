import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let SigninComponent = class SigninComponent {
    constructor(router, authenticationService, toastr, fb) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastr = toastr;
        this.fb = fb;
        this.username = null;
        this.password = null;
        this.pwd = null;
        this.errBoolean = false;
        this.loading = false;
        this.validations = false;
        this.reloadonce = null;
    }
    ngOnInit() {
        this.SigninValidations();
    }
    SigninValidations() {
        this.signinForm = this.fb.group({
            loginId: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(32)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
        });
    }
    get f() {
        return this.signinForm.controls;
    }
    onSubmit() {
        this.loading = !this.loading;
        this.password = this.pwd;
        this.authenticationService.authenticate(this.signinForm.controls['loginId'].value, this.signinForm.controls['password'].value)
            .subscribe(() => {
            this.loading = !this.loading;
            this.router.navigate(['/dashboard']).then(() => {
                this.toastr.success('Login successful', 'Success');
            });
        }, error => {
            this.loading = !this.loading;
            this.pwd = null;
            console.log(error);
            if (error.status > 200 && error.status < 227) {
                this.toastr.error('Incorrect username or password', 'Error');
            }
            else if (error.status > 500) {
                this.toastr.error("Internal server error please try agian after sometime", 'Error');
            }
            else if (error.status === 0) {
                this.toastr.error("Server is not responding", 'Error');
            }
            else if (error.status === 500) {
                this.toastr.error(error.error.message, 'Error');
            }
        });
    }
};
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.css']
    })
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map