import * as i0 from '@angular/core';
import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class DataGridComponent {
    constructor() {
        this.hostClass = true;
    }
}
DataGridComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DataGridComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DataGridComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: DataGridComponent, selector: "uic-data-grid", host: { properties: { "class.uic-data-grid": "this.hostClass" } }, ngImport: i0, template: "<p>data-grid works!</p>\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DataGridComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'uic-data-grid',
                    templateUrl: './data-grid.component.html',
                    styleUrls: ['./data-grid.component.scss']
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.uic-data-grid']
            }] } });

class DataGridModule {
}
DataGridModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DataGridModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
DataGridModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DataGridModule, declarations: [DataGridComponent], imports: [CommonModule], exports: [DataGridComponent] });
DataGridModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DataGridModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DataGridModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DataGridComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [DataGridComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { DataGridComponent, DataGridModule };
//# sourceMappingURL=ui-components-data-grid.js.map
