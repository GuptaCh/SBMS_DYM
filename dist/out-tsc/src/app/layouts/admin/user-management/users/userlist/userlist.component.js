import { __decorate } from "tslib";
import { Component } from '@angular/core';
let UserlistComponent = class UserlistComponent {
    constructor(user, toastr) {
        this.user = user;
        this.toastr = toastr;
        this.userData = [];
        this.countries = [];
        this.states = [];
        this.cities = [];
        this.roles = [];
        this.extensionNumber = '';
    }
    ngOnInit() {
        this.getUsers();
    }
    getUsers() {
        this.user.getUsers().subscribe((res) => {
            console.log(res);
            this.userData = res;
        }, (err) => {
            console.log(err);
        });
    }
    updateUser(userData) {
        this.editUSer = userData;
        console.log(userData);
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
    deleteUser(userData) {
        this.delUser = userData;
        this.name = userData.firstName;
    }
    delete(id) {
        this.user.deleteUsers(id).subscribe((res) => {
            console.log(res);
            this.toastr.success(`User deleted with ${id} successfully`, 'Success');
            this.ngOnInit();
        }, (err) => {
            console.log(err);
        });
    }
    update(id) {
        this.user.updateUsers(this.editUSer, id).subscribe((res) => {
            console.log(res);
            this.toastr.success('User updated successfully', 'Success');
        }, (err) => {
            console.log(err);
        });
    }
};
UserlistComponent = __decorate([
    Component({
        selector: 'app-userlist',
        templateUrl: './userlist.component.html',
        styleUrls: ['./userlist.component.css']
    })
], UserlistComponent);
export { UserlistComponent };
//# sourceMappingURL=userlist.component.js.map