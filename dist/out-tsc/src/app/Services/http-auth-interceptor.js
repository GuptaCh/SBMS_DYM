import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError, filter, take, switchMap } from 'rxjs/operators';
let AuthInterceptor = class AuthInterceptor {
    constructor(auth) {
        this.auth = auth;
        this.isRefreshing = false;
        this.refreshTokenSubject = new BehaviorSubject(null);
    }
    intercept(req, next) {
        const tokenvalue = this.auth.getJwtToken();
        console.log('tokenvalue', tokenvalue);
        if (tokenvalue) {
            req = this.addToken(req, tokenvalue);
        }
        return next.handle(req).pipe(catchError(error => {
            if ((error instanceof HttpErrorResponse && error.status == 403)) {
                console.log('token in interceptor', tokenvalue);
                if (tokenvalue) {
                    console.log('entered in before handle 401 Error');
                    return this.handle401Error(req, next);
                }
                else {
                    console.log('entered in if else in interceptor');
                    return throwError(error);
                }
            }
            else {
                console.log('entered in else in interceptor');
                return throwError(error);
            }
        }));
    }
    addToken(request, token) {
        return request.clone({
            setHeaders: {
                Authorization: `${token}`
            },
        });
    }
    handle401Error(request, next) {
        console.log("handle inter token exp");
        console.log("this.isRefreshing", this.isRefreshing);
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            console.log(" if before return intercept refresh token ");
            return this.auth.refreshToken().pipe(switchMap((token) => {
                this.isRefreshing = false;
                console.log("intercept refresh token ");
                console.log(token);
                this.refreshTokenSubject.next(token['token']);
                console.log(this.refreshTokenSubject);
                this.auth.token = token['token'];
                return next.handle(this.addToken(request, token['token']));
            }));
        }
        else {
            console.log(" else before return intercept refresh token ");
            return this.refreshTokenSubject.pipe(filter(token => token != null), take(1), switchMap(jwt => {
                console.log("switchMap", jwt);
                return next.handle(this.addToken(request, jwt));
            }));
        }
    }
};
AuthInterceptor = __decorate([
    Injectable()
], AuthInterceptor);
export { AuthInterceptor };
//# sourceMappingURL=http-auth-interceptor.js.map