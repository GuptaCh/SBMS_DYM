import { __decorate } from "tslib";
import { Component } from '@angular/core';
import * as $ from "jquery";
let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    ;
};
SidebarComponent = __decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.css']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map