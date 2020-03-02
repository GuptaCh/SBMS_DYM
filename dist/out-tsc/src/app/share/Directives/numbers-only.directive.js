import { __decorate } from "tslib";
import { Directive, HostListener } from '@angular/core';
let NumbersOnlyDirective = class NumbersOnlyDirective {
    constructor(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^[0-9]+([\s][0-9]+)*$/);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', 'Delete', 'ArrowLeft', 'ArrowRight'];
    }
    onKeyDown(event) {
        //  console.log(event.key);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        let current = this.el.nativeElement.value;
        let next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    }
};
__decorate([
    HostListener('keydown', ['$event'])
], NumbersOnlyDirective.prototype, "onKeyDown", null);
NumbersOnlyDirective = __decorate([
    Directive({
        selector: '[appNumbersOnly]',
        exportAs: 'appNumbersOnly'
    })
], NumbersOnlyDirective);
export { NumbersOnlyDirective };
//# sourceMappingURL=numbers-only.directive.js.map