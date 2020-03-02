import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { catchError, map, take, tap } from 'rxjs/operators';
let AuthenticationService = class AuthenticationService {
    constructor(http, errHandler, ip) {
        this.http = http;
        this.errHandler = errHandler;
        this.ip = ip;
        this.rolebase = null;
        this.islogin = false;
        this.userName = new BehaviorSubject(null);
        this.token = localStorage.getItem('token') || null;
        this.refresh_Token = null;
        this.decodeToken();
    }
    getJwtToken() {
        return this.token;
    }
    refreshToken() {
        return this.http.get(`${this.ip.ip}${this.ip.login_Port}/rest/v1/login/generateToken/${this.decoded.sub}`).pipe(take(1), tap(res => {
            console.log(res);
            if (res) {
                this.refresh_Token = res['jwtToken'];
                console.log("refresh token");
                console.log(this.refresh_Token);
                if (this.refresh_Token) {
                    localStorage.setItem('token', this.refresh_Token);
                    this.token = this.refresh_Token;
                }
            }
        }));
    }
    decodeToken() {
        if (this.token != null && this.token != undefined && this.token.length != 0) {
            this.decoded = jwt_decode(this.token);
            this.userName.next(this.decoded.sub);
            console.log(this.userName);
            console.log(this.decoded);
            return true;
        }
        else
            return false;
    }
    authenticate(loginId, password) {
        return this.http.post(`${this.ip.ip}${this.ip.login_Port}/rest/v1/login/signin`, { loginId, password }).pipe(map(res => {
            if (res) {
                console.log(res);
                this.token = res['jwtToken'];
                localStorage.setItem('token', this.token);
                this.decodeToken();
                return true;
            }
            else
                return false;
        }), catchError(this.errHandler.handleError));
    }
    logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.token = null;
        this.rolebase = null;
        this.islogin = false;
    }
};
AuthenticationService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthenticationService);
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map