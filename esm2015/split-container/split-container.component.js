/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
export class SplitContainerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3VpLWNvbXBvbmVudHMvc3BsaXQtY29udGFpbmVyLyIsInNvdXJjZXMiOlsic3BsaXQtY29udGFpbmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFPckQsTUFBTSxPQUFPLHVCQUF1QjtJQUxwQztRQU9FLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLDBoQkFBK0M7O2FBRWhEOzs7d0JBRUUsV0FBVyxTQUFDLDJCQUEyQjs7OztJQUF4Qyw0Q0FDaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmd9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1aWMtc3BsaXQtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwbGl0LWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3NwbGl0LWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0Q29udGFpbmVyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51aWMtc3BsaXQtY29udGFpbmVyJylcbiAgaG9zdENsYXNzID0gdHJ1ZTtcbn1cbiJdfQ==