import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGaurdService = class AuthGaurdService {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    canActivate(route, state) {
        const currentUser = this.auth.getJwtToken();
        if (currentUser != null) {
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signIn']);
        return false;
    }
};
AuthGaurdService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthGaurdService);
export { AuthGaurdService };
//# sourceMappingURL=auth-guard.service.js.map