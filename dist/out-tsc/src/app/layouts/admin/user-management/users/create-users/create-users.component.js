import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
let CreateUsersComponent = class CreateUsersComponent {
    constructor(fb, user, toastr, router) {
        this.fb = fb;
        this.user = user;
        this.toastr = toastr;
        this.router = router;
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.roles = [];
        this.extensionNumber = '';
        this.spin = false;
        this.permissions = [];
    }
    ngOnInit() {
        this.userFormValidations();
        this.getCountries();
        this.getRoles();
        this.subRolelistById();
    }
    userFormValidations() {
        this.userForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
            lastName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(16)]],
            userName: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
            emailId: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
            phoneNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            country: ['', [Validators.required]],
            state: ['', [Validators.required]],
            city: ['', [Validators.required]],
            roleName: ['', [Validators.required]],
            permissions: this.fb.array(this.permissions, [Validators.required]),
        });
    }
    subRolelistById() {
        this.user.roleListById.subscribe(val => {
            if (val != null) {
                this.permissions = val.permissions;
            }
        });
    }
    onCheckboxChange(e) {
        const permissions = this.userForm.get('permissions');
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
    get f() {
        return this.userForm.controls;
    }
    getCountries() {
        this.user.getCountries().subscribe((res) => {
            console.log(res);
            this.countries = res;
        }, (err) => {
            console.log(err);
        });
    }
    Filter(name) {
        console.log(name);
        let number = this.countries.filter(v => v.name == name);
        console.log(number);
        if (number.length !== 0) {
            this.extensionNo = number[0].phone_code;
            this.extensionNumber = this.extensionNo;
            console.log(this.extensionNumber);
            /*   this.id = number[0].id;
              console.log(this.id); */
            this.getStates(number[0].id);
            /*  console.log(this.getStates(this.id)); */
        }
        else {
            this.toastr.warning('Please select country', 'Warning');
            // this.states = [];
            // this.cities = [];
        }
    }
    getStates(id) {
        console.log(id);
        this.user.getStates(id).subscribe((res) => {
            console.log(res);
            this.states = res;
        }, (err) => {
            console.log(err);
        });
    }
    selectedState(name) {
        console.log(name);
        let number = this.states.filter(v => v.name == name);
        console.log(number);
        if (number.length != 0) {
            this.getCities(+number[0].id);
        }
        else {
            this.toastr.warning('Please select state', 'warning');
        }
    }
    getCities(id) {
        console.log(id);
        this.user.getCities(id).subscribe((res) => {
            console.log(res);
            this.cities = res;
        }, (err) => {
            console.log(err);
        });
    }
    getRoles() {
        this.user.getRole().subscribe((res) => {
            console.log(res);
            this.roles = res;
        }, (err) => {
            console.log(err);
        });
    }
    getRolesById(roleId) {
        this.user.getRoleById(roleId).subscribe((res) => {
            console.log(res);
        }, (err) => {
            console.log(err);
        });
    }
    selectRolename(name) {
        console.log(name);
        let number = this.roles.filter(v => v.name == name);
        console.log(number);
        if (number.length !== 0) {
            this.id = number[0].roleId;
            console.log(this.id);
            this.getRolesById(number[0].roleId);
        }
        else {
            this.toastr.warning('Please select role', 'Warning');
        }
    }
    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.user.roleListById.next(null);
    }
    onSubmit() {
        this.spin = true;
        console.log(this.userForm.value);
        if (this.userForm.invalid) {
            return;
        }
        this.user.createByUser(this.userForm.value).subscribe((res) => {
            console.log(res);
            this.spin = false;
            this.user.roleListById.next(null);
            this.toastr.success('User created successfully', 'Success');
            this.router.navigate(['user-management/users/users-list']);
        }, (err) => {
            console.log(err);
            this.spin = false;
        });
    }
};
CreateUsersComponent = __decorate([
    Component({
        selector: 'app-create-users',
        templateUrl: './create-users.component.html',
        styleUrls: ['./create-users.component.css']
    })
], CreateUsersComponent);
export { CreateUsersComponent };
//# sourceMappingURL=create-users.component.js.map