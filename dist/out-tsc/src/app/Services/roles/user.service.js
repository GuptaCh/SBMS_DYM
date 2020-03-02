import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
let UserService = class UserService {
    constructor(http, ip, errHandler) {
        this.http = http;
        this.ip = ip;
        this.errHandler = errHandler;
        this.site_port = this.ip.site_port;
        this.roleListById = new BehaviorSubject(null);
    }
    createByUser(user) {
        return this.http.post(`${this.ip.ip}${this.ip.usermanagement_port}/rest/v1/users/create`, user).pipe(catchError(this.errHandler.handleError));
    }
    //Get all Countries
    getCountries() {
        return this.http.get(`${this.ip.ip}${this.site_port}/rest/v1/location/getCountries`).pipe((catchError(this.errHandler.handleError)));
    }
    //Get states based on country id
    getStates(id) {
        return this.http.get(`${this.ip.ip}${this.site_port}/rest/v1/location/getStates/${id}`).pipe((catchError(this.errHandler.handleError)));
    }
    //Get cities based on state id
    getCities(id) {
        return this.http.get(`${this.ip.ip}${this.site_port}/rest/v1/location/getCities/${id}`).pipe((catchError(this.errHandler.handleError)));
    }
    //Get Roles
    getRole() {
        return this.http.get(`${this.ip.ip}${this.ip.usermanagement_port}/rest/v1/roles`).pipe((catchError(this.errHandler.handleError)));
    }
    //Get USers
    getUsers() {
        return this.http.get(`${this.ip.ip}${this.ip.usermanagement_port}/rest/v1/users`).pipe((catchError(this.errHandler.handleError)));
    }
    //Edit user
    updateUsers(user, id) {
        return this.http.put(`${this.ip.ip}${this.ip.usermanagement_port}/rest/v1/users/${id}`, user).pipe((catchError(this.errHandler.handleError)));
    }
    //Delete user
    deleteUsers(id) {
        return this.http.delete(`${this.ip.ip}${this.ip.usermanagement_port}/rest/v1/users/${id}`).pipe((catchError(this.errHandler.handleError)));
    }
    // Get roles based on id
    getRoleById(roleId) {
        return this.http.get(`${this.ip.ip}${this.ip.usermanagement_port}/rest/v1/roles/${roleId}`)
            .pipe(map(res => {
            this.roleListById.next(res);
            return res;
        }), (catchError(this.errHandler.handleError)));
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map