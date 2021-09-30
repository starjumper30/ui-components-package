import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DataGridComponent = /** @class */ (function () {
    function DataGridComponent() {
        this.hostClass = true;
    }
    DataGridComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uic-data-grid',
                    template: "<p>data-grid works!</p>\n",
                    styles: [":host{display:block}"]
                }] }
    ];
    DataGridComponent.propDecorators = {
        hostClass: [{ type: HostBinding, args: ['class.uic-data-grid',] }]
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
        { type: NgModule, args: [{
                    declarations: [DataGridComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [DataGridComponent]
                },] }
    ];
    return DataGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { DataGridComponent, DataGridModule };
//# sourceMappingURL=ui-components-data-grid.js.map
