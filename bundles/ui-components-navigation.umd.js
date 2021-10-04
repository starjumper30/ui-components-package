(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/router')) :
    typeof define === 'function' && define.amd ? define('ui-components/navigation', ['exports', '@angular/core', '@angular/common', '@angular/router'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["ui-components"] = global["ui-components"] || {}, global["ui-components"].navigation = {}), global.ng.core, global.ng.common, global.ng.router));
})(this, (function (exports, i0, i1, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    var NavBarComponent = /** @class */ (function () {
        function NavBarComponent() {
            this.hostClass = true;
        }
        return NavBarComponent;
    }());
    NavBarComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: NavBarComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NavBarComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: NavBarComponent, selector: "uic-nav-bar", inputs: { routes: "routes" }, host: { properties: { "class.uic-nav-bar": "this.hostClass" } }, ngImport: i0__namespace, template: "<nav>\n  <ul>\n    <li *ngFor=\"let route of routes\" [routerLink]=\"route.path\" routerLinkActive=\"active\">\n      {{route.title}}\n    </li>\n  </ul>\n</nav>\n", styles: [":host{display:block}\n"], directives: [{ type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2__namespace.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }, { type: i2__namespace.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: NavBarComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'uic-nav-bar',
                        templateUrl: './nav-bar.component.html',
                        styleUrls: ['./nav-bar.component.scss']
                    }]
            }], propDecorators: { hostClass: [{
                    type: i0.HostBinding,
                    args: ['class.uic-nav-bar']
                }], routes: [{
                    type: i0.Input
                }] } });

    var NavigationModule = /** @class */ (function () {
        function NavigationModule() {
        }
        return NavigationModule;
    }());
    NavigationModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: NavigationModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NavigationModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: NavigationModule, declarations: [NavBarComponent], imports: [i1.CommonModule,
            i2.RouterModule], exports: [NavBarComponent] });
    NavigationModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: NavigationModule, imports: [[
                i1.CommonModule,
                i2.RouterModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: NavigationModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [NavBarComponent],
                        imports: [
                            i1.CommonModule,
                            i2.RouterModule
                        ],
                        exports: [NavBarComponent]
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NavBarComponent = NavBarComponent;
    exports.NavigationModule = NavigationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-components-navigation.umd.js.map
