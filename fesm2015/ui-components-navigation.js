import { Component, HostBinding, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavBarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NavRoute() { }
if (false) {
    /** @type {?} */
    NavRoute.prototype.title;
    /** @type {?} */
    NavRoute.prototype.path;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NavigationModule {
}
NavigationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NavBarComponent],
                imports: [
                    CommonModule,
                    RouterModule
                ],
                exports: [NavBarComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NavBarComponent, NavigationModule };
//# sourceMappingURL=ui-components-navigation.js.map
