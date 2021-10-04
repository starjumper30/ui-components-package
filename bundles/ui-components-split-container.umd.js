(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-components/split-container', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["ui-components"] = global["ui-components"] || {}, global["ui-components"]["split-container"] = {}), global.ng.core, global.ng.common));
})(this, (function (exports, i0, common) { 'use strict';

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

    var SplitContainerComponent = /** @class */ (function () {
        function SplitContainerComponent() {
            this.hostClass = true;
        }
        return SplitContainerComponent;
    }());
    SplitContainerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SplitContainerComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    SplitContainerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: SplitContainerComponent, selector: "uic-split-container", host: { properties: { "class.uic-split-container": "this.hostClass" } }, ngImport: i0__namespace, template: "<div class=\"split vertical\">\n  <div class=\"split horizontal\">\n    <div class=\"panel top left\">\n      <ng-content select=\".panel-content-1\"></ng-content>\n    </div>\n    <div class=\"panel\">\n      <ng-content select=\".panel-content-2\"></ng-content>\n    </div>\n  </div>\n  <div class=\"split horizontal\">\n    <div class=\"panel bottom left\"><ng-content select=\".panel-content-3\"></ng-content></div>\n    <div  class=\"panel\"><ng-content select=\".panel-content-4\"></ng-content></div>\n  </div>\n</div>\n", styles: [":host{display:block;position:relative}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SplitContainerComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'uic-split-container',
                        templateUrl: './split-container.component.html',
                        styleUrls: ['./split-container.component.scss']
                    }]
            }], propDecorators: { hostClass: [{
                    type: i0.HostBinding,
                    args: ['class.uic-split-container']
                }] } });

    var SplitContainerModule = /** @class */ (function () {
        function SplitContainerModule() {
        }
        return SplitContainerModule;
    }());
    SplitContainerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SplitContainerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    SplitContainerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SplitContainerModule, declarations: [SplitContainerComponent], imports: [common.CommonModule], exports: [SplitContainerComponent] });
    SplitContainerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SplitContainerModule, imports: [[
                common.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: SplitContainerModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [SplitContainerComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [SplitContainerComponent]
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.SplitContainerComponent = SplitContainerComponent;
    exports.SplitContainerModule = SplitContainerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-components-split-container.umd.js.map
