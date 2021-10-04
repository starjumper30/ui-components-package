import * as i0 from '@angular/core';
import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class SplitContainerComponent {
    constructor() {
        this.hostClass = true;
    }
}
SplitContainerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SplitContainerComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SplitContainerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: SplitContainerComponent, selector: "uic-split-container", host: { properties: { "class.uic-split-container": "this.hostClass" } }, ngImport: i0, template: "<div class=\"split vertical\">\n  <div class=\"split horizontal\">\n    <div class=\"panel top left\">\n      <ng-content select=\".panel-content-1\"></ng-content>\n    </div>\n    <div class=\"panel\">\n      <ng-content select=\".panel-content-2\"></ng-content>\n    </div>\n  </div>\n  <div class=\"split horizontal\">\n    <div class=\"panel bottom left\"><ng-content select=\".panel-content-3\"></ng-content></div>\n    <div  class=\"panel\"><ng-content select=\".panel-content-4\"></ng-content></div>\n  </div>\n</div>\n", styles: [":host{display:block;position:relative}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SplitContainerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'uic-split-container',
                    templateUrl: './split-container.component.html',
                    styleUrls: ['./split-container.component.scss']
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.uic-split-container']
            }] } });

class SplitContainerModule {
}
SplitContainerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SplitContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SplitContainerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SplitContainerModule, declarations: [SplitContainerComponent], imports: [CommonModule], exports: [SplitContainerComponent] });
SplitContainerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SplitContainerModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: SplitContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SplitContainerComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [SplitContainerComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SplitContainerComponent, SplitContainerModule };
//# sourceMappingURL=ui-components-split-container.js.map
