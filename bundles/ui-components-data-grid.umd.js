(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-components/data-grid', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["ui-components"] = global["ui-components"] || {}, global["ui-components"]["data-grid"] = {}), global.ng.core, global.ng.common));
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

    var DataGridComponent = /** @class */ (function () {
        function DataGridComponent() {
            this.hostClass = true;
        }
        return DataGridComponent;
    }());
    DataGridComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DataGridComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DataGridComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: DataGridComponent, selector: "uic-data-grid", host: { properties: { "class.uic-data-grid": "this.hostClass" } }, ngImport: i0__namespace, template: "<p>data-grid works!</p>\n", styles: [":host{display:block}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DataGridComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'uic-data-grid',
                        templateUrl: './data-grid.component.html',
                        styleUrls: ['./data-grid.component.scss']
                    }]
            }], propDecorators: { hostClass: [{
                    type: i0.HostBinding,
                    args: ['class.uic-data-grid']
                }] } });

    var DataGridModule = /** @class */ (function () {
        function DataGridModule() {
        }
        return DataGridModule;
    }());
    DataGridModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DataGridModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    DataGridModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DataGridModule, declarations: [DataGridComponent], imports: [common.CommonModule], exports: [DataGridComponent] });
    DataGridModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DataGridModule, imports: [[
                common.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DataGridModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [DataGridComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [DataGridComponent]
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DataGridComponent = DataGridComponent;
    exports.DataGridModule = DataGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-components-data-grid.umd.js.map
