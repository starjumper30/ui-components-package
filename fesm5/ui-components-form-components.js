import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ChecklistComponent = /** @class */ (function () {
    function ChecklistComponent() {
        this.hostClass = true;
    }
    ChecklistComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uic-checklist',
                    template: "<p>checklist works!</p>\n",
                    styles: [":host{display:block}"]
                }] }
    ];
    ChecklistComponent.propDecorators = {
        hostClass: [{ type: HostBinding, args: ['class.uic-checklist',] }]
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
        { type: Component, args: [{
                    selector: 'uic-dropdown',
                    template: "<p>dropdown works!</p>\n",
                    styles: [":host{display:block}"]
                }] }
    ];
    DropdownComponent.propDecorators = {
        hostClass: [{ type: HostBinding, args: ['class.uic-dropdown',] }]
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
        { type: NgModule, args: [{
                    declarations: [DropdownComponent, ChecklistComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [DropdownComponent, ChecklistComponent]
                },] }
    ];
    return FormComponentsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChecklistComponent, DropdownComponent, FormComponentsModule };
//# sourceMappingURL=ui-components-form-components.js.map
