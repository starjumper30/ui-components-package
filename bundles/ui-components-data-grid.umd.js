(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-components/data-grid', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ui-components'] = global['ui-components'] || {}, global['ui-components']['data-grid'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataGridComponent = /** @class */ (function () {
        function DataGridComponent() {
            this.hostClass = true;
        }
        DataGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'uic-data-grid',
                        template: "<p>data-grid works!</p>\n",
                        styles: [":host{display:block}"]
                    }] }
        ];
        DataGridComponent.propDecorators = {
            hostClass: [{ type: core.HostBinding, args: ['class.uic-data-grid',] }]
        };
        return DataGridComponent;
    }());
    if (false) {
        /** @type {?} */
        DataGridComponent.prototype.hostClass;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DataGridModule = /** @class */ (function () {
        function DataGridModule() {
        }
        DataGridModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DataGridComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [DataGridComponent]
                    },] }
        ];
        return DataGridModule;
    }());

    exports.DataGridComponent = DataGridComponent;
    exports.DataGridModule = DataGridModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-components-data-grid.umd.js.map
