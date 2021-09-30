/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, Input } from '@angular/core';
var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
        this.hostClass = true;
    }
    NavBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'uic-nav-bar',
                    template: "<nav>\n  <ul>\n    <li *ngFor=\"let route of routes\" [routerLink]=\"route.path\" routerLinkActive=\"active\">\n      {{route.title}}\n    </li>\n  </ul>\n</nav>\n",
                    styles: [":host{display:block}"]
                }] }
    ];
    NavBarComponent.propDecorators = {
        hostClass: [{ type: HostBinding, args: ['class.uic-nav-bar',] }],
        routes: [{ type: Input }]
    };
    return NavBarComponent;
}());
export { NavBarComponent };
if (false) {
    /** @type {?} */
    NavBarComponent.prototype.hostClass;
    /** @type {?} */
    NavBarComponent.prototype.routes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly91aS1jb21wb25lbnRzL25hdmlnYXRpb24vIiwic291cmNlcyI6WyJuYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHNUQ7SUFBQTtRQU9FLGNBQVMsR0FBRyxJQUFJLENBQUM7SUFJbkIsQ0FBQzs7Z0JBWEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwrS0FBdUM7O2lCQUV4Qzs7OzRCQUVFLFdBQVcsU0FBQyxtQkFBbUI7eUJBRy9CLEtBQUs7O0lBRVIsc0JBQUM7Q0FBQSxBQVhELElBV0M7U0FOWSxlQUFlOzs7SUFDMUIsb0NBQ2lCOztJQUVqQixpQ0FDbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSG9zdEJpbmRpbmcsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmF2Um91dGV9IGZyb20gJy4vbmF2LXJvdXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndWljLW5hdi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2LWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25hdi1iYXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZCYXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnVpYy1uYXYtYmFyJylcbiAgaG9zdENsYXNzID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICByb3V0ZXM6IE5hdlJvdXRlW107XG59XG4iXX0=