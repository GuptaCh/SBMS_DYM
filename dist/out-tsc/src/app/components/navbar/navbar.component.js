import { __decorate } from "tslib";
import { Component, HostListener } from '@angular/core';
import * as $ from "jquery";
import { Logout } from 'src/app/share/logout';
let NavbarComponent = class NavbarComponent {
    constructor(location, element, router, auth) {
        this.element = element;
        this.router = router;
        this.auth = auth;
        this.mobile_menu_visible = 0;
        this.windowSize = $(window).width();
        this.userName = null;
        this.location = location;
    }
    onResize(event) {
        this.windowSize = event.target.innerWidth;
        this.window(event.target.innerWidth);
    }
    ngOnInit() {
        this.window(this.windowSize);
        this.displayUserName();
    }
    displayUserName() {
        this.auth.userName.subscribe(val => {
            this.userName = val;
        });
    }
    window(windowSize) {
        if (windowSize < 991) {
            $(document).ready(function () {
                $("#sidebar, #content").addClass('active');
                $(".navbarTitle").hide("fast");
                $("#navbarTitleSmall").show();
            });
        }
        else {
            $(document).ready(function () {
                $("#sidebar, #content").removeClass('active');
                $(".navbarTitle").show("fast");
                $("#navbarTitleSmall").hide();
            });
        }
    }
    showSideBar() {
        $(document).ready(function () {
            $("#sidebar, #content").toggleClass('active');
        });
    }
    logout() {
        let logout = new Logout(this.router, this.auth);
        logout.logout();
    }
};
__decorate([
    HostListener('window:resize', ['$event'])
], NavbarComponent.prototype, "onResize", null);
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map