(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ui-components/form-components', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global['ui-components'] = global['ui-components'] || {}, global['ui-components']['form-components'] = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChecklistComponent = /** @class */ (function () {
        function ChecklistComponent() {
            this.hostClass = true;
        }
        ChecklistComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'uic-checklist',
                        template: "<p>checklist works!</p>\n",
                        styles: [":host{display:block}"]
                    }] }
        ];
        ChecklistComponent.propDecorators = {
            hostClass: [{ type: core.HostBinding, args: ['class.uic-checklist',] }]
        };
        return ChecklistComponent;
    }());
    if (false) {
        /** @type {?} */
        ChecklistComponent.prototype.hostClass;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DropdownComponent = /** @class */ (function () {
        function DropdownComponent() {
            this.hostClass = true;
        }
        DropdownComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'uic-dropdown',
                        template: "<p>dropdown works!</p>\n",
                        styles: [":host{display:block}"]
                    }] }
        ];
        DropdownComponent.propDecorators = {
            hostClass: [{ type: core.HostBinding, args: ['class.uic-dropdown',] }]
        };
        return DropdownComponent;
    }());
    if (false) {
        /** @type {?} */
        DropdownComponent.prototype.hostClass;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FormComponentsModule = /** @class */ (function () {
        function FormComponentsModule() {
        }
        FormComponentsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [DropdownComponent, ChecklistComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [DropdownComponent, ChecklistComponent]
                    },] }
        ];
        return FormComponentsModule;
    }());

    exports.ChecklistComponent = ChecklistComponent;
    exports.DropdownComponent = DropdownComponent;
    exports.FormComponentsModule = FormComponentsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-components-form-components.umd.js.map
