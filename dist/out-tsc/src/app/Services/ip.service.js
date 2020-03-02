import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let IpService = class IpService {
    constructor() {
        this.ip = "http://192.168.10.231:";
        this.login_Port = "8081";
        this.asset_Port = "2018";
        this.usermanagement_port = "2017";
        this.site_port = "2151";
    }
};
IpService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], IpService);
export { IpService };
//# sourceMappingURL=ip.service.js.map