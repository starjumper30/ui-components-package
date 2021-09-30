/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
export class NavBarComponent {
    constructor() {
        this.hostClass = true;
    }
}
NavBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'uic-nav-bar',
                template: "<nav>\n  <ul>\n    <li *ngFor=\"let route of routes\" [routerLink]=\"route.path\" routerLinkActive=\"active\">\n      {{route.title}}\n    </li>\n  </ul>\n</nav>\n",
                styles: [":host{display:block}"]
            }] }
];
NavBarComponent.propDecorators = {
    hostClass: [{ type: HostBinding, args: ['class.uic-nav-bar',] }],
    routes: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NavBarComponent.prototype.hostClass;
    /** @type {?} */
    NavBarComponent.prototype.routes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1jb21wb25lbnRzL25hdmlnYXRpb24vIiwic291cmNlcyI6WyJuYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFRNUQsTUFBTSxPQUFPLGVBQWU7SUFMNUI7UUFPRSxjQUFTLEdBQUcsSUFBSSxDQUFDO0lBSW5CLENBQUM7OztZQVhBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsK0tBQXVDOzthQUV4Qzs7O3dCQUVFLFdBQVcsU0FBQyxtQkFBbUI7cUJBRy9CLEtBQUs7Ozs7SUFITixvQ0FDaUI7O0lBRWpCLGlDQUNtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZSb3V0ZX0gZnJvbSAnLi9uYXYtcm91dGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWMtbmF2LWJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXYtYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmF2LWJhci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5hdkJhckNvbXBvbmVudCB7XG4gIEBIb3N0QmluZGluZygnY2xhc3MudWljLW5hdi1iYXInKVxuICBob3N0Q2xhc3MgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHJvdXRlczogTmF2Um91dGVbXTtcbn1cbiJdfQ==