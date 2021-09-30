import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SplitContainerComponent {
    constructor() {
        this.hostClass = true;
    }
}
SplitContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'uic-split-container',
                template: "<div class=\"split vertical\">\n  <div class=\"split horizontal\">\n    <div class=\"panel top left\">\n      <ng-content select=\".panel-content-1\"></ng-content>\n    </div>\n    <div class=\"panel\">\n      <ng-content select=\".panel-content-2\"></ng-content>\n    </div>\n  </div>\n  <div class=\"split horizontal\">\n    <div class=\"panel bottom left\"><ng-content select=\".panel-content-3\"></ng-content></div>\n    <div  class=\"panel\"><ng-content select=\".panel-content-4\"></ng-content></div>\n  </div>\n</div>\n",
                styles: [":host{display:block;position:relative}"]
            }] }
];
SplitContainerComponent.propDecorators = {
    hostClass: [{ type: HostBinding, args: ['class.uic-split-container',] }]
};
if (false) {
    /** @type {?} */
    SplitContainerComponent.prototype.hostClass;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SplitContainerModule {
}
SplitContainerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SplitContainerComponent],
                imports: [
                    CommonModule
                ],
                exports: [SplitContainerComponent]
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

export { SplitContainerComponent, SplitContainerModule };
//# sourceMappingURL=ui-components-split-container.js.map
