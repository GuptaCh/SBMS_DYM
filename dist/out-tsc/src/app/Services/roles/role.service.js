import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
let RoleService = class RoleService {
    constructor(ip, http, errHandler) {
        this.ip = ip;
        this.http = http;
        this.errHandler = errHandler;
        this.Ip = "http://192.168.10.57:";
        this.port = this.ip.usermanagement_port;
        this.roles = '/rest/v1/roles';
        this.permissions = "/rest/v1/permissions";
        this.roleList = new BehaviorSubject([]);
        this.permissionList = new BehaviorSubject([]);
    }
    /* create permissions */
    createPermission(permission) {
        return this.http.post(`${this.ip.ip}${this.port}${this.permissions}/create`, permission)
            .pipe(map((res) => {
            return res;
        }), catchError(this.errHandler.handleError));
    }
    /* get permissions */
    getPermissions() {
        return this.http.get(`${this.ip.ip}${this.port}${this.permissions}`)
            .pipe(map(res => {
            console.log("permissions", res);
            if (res != null) {
                this.permissionList.next(res);
            }
            return res;
        }), catchError(this.errHandler.handleError));
    }
    /* edit permissions */
    editPermissions(permission) {
        return this.http.put(`${this.ip.ip}${this.port}${this.permissions}/`, permission)
            .pipe(catchError(this.errHandler.handleError));
    }
    /* delete permissions */
    deletePermissions(id) {
        return this.http.delete(`${this.ip.ip}${this.port}${this.permissions}/${id}`)
            .pipe(map(res => {
            this.getPermissions().subscribe();
        }), catchError(this.errHandler.handleError));
    }
    /* create role */
    createRole(role) {
        console.log("role", role);
        return this.http.post(`${this.ip.ip}${this.port}${this.roles}/create`, role)
            .pipe(catchError(this.errHandler.handleError));
    }
    /* role list */
    getRoleList() {
        return this.http.get(`${this.ip.ip}${this.port}${this.roles}/`)
            .pipe(map(res => {
            this.roleList.next(res);
            return res;
        }), catchError(this.errHandler.handleError));
    }
    /* role update */
    updateRole(roles) {
        return this.http.put(`${this.ip.ip}${this.port}${this.roles}/${roles.roleId}`, roles)
            .pipe(catchError(this.errHandler.handleError));
    }
    /* role update */
    deleteRole(id) {
        return this.http.delete(`${this.ip.ip}${this.port}${this.roles}/${id}`)
            .pipe(map(() => {
            this.getRoleList().subscribe();
        }), catchError(this.errHandler.handleError));
    }
};
RoleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], RoleService);
export { RoleService };
//# sourceMappingURL=role.service.js.map