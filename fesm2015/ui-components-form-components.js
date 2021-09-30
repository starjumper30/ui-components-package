import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChecklistComponent {
    constructor() {
        this.hostClass = true;
    }
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
if (false) {
    /** @type {?} */
    ChecklistComponent.prototype.hostClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DropdownComponent {
    constructor() {
        this.hostClass = true;
    }
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
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.hostClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormComponentsModule {
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
