export class Logout {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    logout() {
        this.auth.token = null;
        localStorage.removeItem('token');
        this.router.navigate(['/signIn']);
    }
}
//# sourceMappingURL=logout.js.map