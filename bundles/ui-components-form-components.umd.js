(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-components/form-components', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global["ui-components"] = global["ui-components"] || {}, global["ui-components"]["form-components"] = {}), global.ng.core, global.ng.common));
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

    var ChecklistComponent = /** @class */ (function () {
        function ChecklistComponent() {
            this.hostClass = true;
        }
        return ChecklistComponent;
    }());
    ChecklistComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ChecklistComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    ChecklistComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ChecklistComponent, selector: "uic-checklist", host: { properties: { "class.uic-checklist": "this.hostClass" } }, ngImport: i0__namespace, template: "<p>checklist works!</p>\n", styles: [":host{display:block}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: ChecklistComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'uic-checklist',
                        templateUrl: './checklist.component.html',
                        styleUrls: ['./checklist.component.scss']
                    }]
            }], propDecorators: { hostClass: [{
                    type: i0.HostBinding,
                    args: ['class.uic-checklist']
                }] } });

    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent() {
            this.hostClass = true;
        }
        return DropdownComponent;
    }());
    DropdownComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DropdownComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    DropdownComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: DropdownComponent, selector: "uic-dropdown", host: { properties: { "class.uic-dropdown": "this.hostClass" } }, ngImport: i0__namespace, template: "<p>dropdown works!</p>\n", styles: [":host{display:block}\n"] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: DropdownComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'uic-dropdown',
                        templateUrl: './dropdown.component.html',
                        styleUrls: ['./dropdown.component.scss']
                    }]
            }], propDecorators: { hostClass: [{
                    type: i0.HostBinding,
                    args: ['class.uic-dropdown']
                }] } });

    var FormComponentsModule = /** @class */ (function () {
        function FormComponentsModule() {
        }
        return FormComponentsModule;
    }());
    FormComponentsModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: FormComponentsModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    FormComponentsModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: FormComponentsModule, declarations: [DropdownComponent, ChecklistComponent], imports: [common.CommonModule], exports: [DropdownComponent, ChecklistComponent] });
    FormComponentsModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: FormComponentsModule, imports: [[
                common.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0__namespace, type: FormComponentsModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [DropdownComponent, ChecklistComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [DropdownComponent, ChecklistComponent]
                    }]
            }] });

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChecklistComponent = ChecklistComponent;
    exports.DropdownComponent = DropdownComponent;
    exports.FormComponentsModule = FormComponentsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-components-form-components.umd.js.map
