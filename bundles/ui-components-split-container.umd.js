(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-components/split-container', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ui-components'] = global['ui-components'] || {}, global['ui-components']['split-container'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SplitContainerComponent = /** @class */ (function () {
        function SplitContainerComponent() {
            this.hostClass = true;
        }
        SplitContainerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'uic-split-container',
                        template: "<div class=\"split vertical\">\n  <div class=\"split horizontal\">\n    <div class=\"panel top left\">\n      <ng-content select=\".panel-content-1\"></ng-content>\n    </div>\n    <div class=\"panel\">\n      <ng-content select=\".panel-content-2\"></ng-content>\n    </div>\n  </div>\n  <div class=\"split horizontal\">\n    <div class=\"panel bottom left\"><ng-content select=\".panel-content-3\"></ng-content></div>\n    <div  class=\"panel\"><ng-content select=\".panel-content-4\"></ng-content></div>\n  </div>\n</div>\n",
                        styles: [":host{display:block;position:relative}"]
                    }] }
        ];
        SplitContainerComponent.propDecorators = {
            hostClass: [{ type: core.HostBinding, args: ['class.uic-split-container',] }]
        };
        return SplitContainerComponent;
    }());
    if (false) {
        /** @type {?} */
        SplitContainerComponent.prototype.hostClass;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SplitContainerModule = /** @class */ (function () {
        function SplitContainerModule() {
        }
        SplitContainerModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [SplitContainerComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [SplitContainerComponent]
                    },] }
        ];
        return SplitContainerModule;
    }());

    exports.SplitContainerComponent = SplitContainerComponent;
    exports.SplitContainerModule = SplitContainerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-components-split-container.umd.js.map
