(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ui-components/navigation', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = global || self, factory((global['ui-components'] = global['ui-components'] || {}, global['ui-components'].navigation = {}), global.ng.core, global.ng.common, global.ng.router));
}(this, (function (exports, core, common, router) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NavBarComponent = /** @class */ (function () {
        function NavBarComponent() {
            this.hostClass = true;
        }
        NavBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'uic-nav-bar',
                        template: "<nav>\n  <ul>\n    <li *ngFor=\"let route of routes\" [routerLink]=\"route.path\" routerLinkActive=\"active\">\n      {{route.title}}\n    </li>\n  </ul>\n</nav>\n",
                        styles: [":host{display:block}"]
                    }] }
        ];
        NavBarComponent.propDecorators = {
            hostClass: [{ type: core.HostBinding, args: ['class.uic-nav-bar',] }],
            routes: [{ type: core.Input }]
        };
        return NavBarComponent;
    }());
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
    var NavigationModule = /** @class */ (function () {
        function NavigationModule() {
        }
        NavigationModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NavBarComponent],
                        imports: [
                            common.CommonModule,
                            router.RouterModule
                        ],
                        exports: [NavBarComponent]
                    },] }
        ];
        return NavigationModule;
    }());

    exports.NavBarComponent = NavBarComponent;
    exports.NavigationModule = NavigationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-components-navigation.umd.js.map
