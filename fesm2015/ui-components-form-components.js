import * as i0 from '@angular/core';
import { Component, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class ChecklistComponent {
    constructor() {
        this.hostClass = true;
    }
}
ChecklistComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ChecklistComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChecklistComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: ChecklistComponent, selector: "uic-checklist", host: { properties: { "class.uic-checklist": "this.hostClass" } }, ngImport: i0, template: "<p>checklist works!</p>\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: ChecklistComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'uic-checklist',
                    templateUrl: './checklist.component.html',
                    styleUrls: ['./checklist.component.scss']
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.uic-checklist']
            }] } });

class DropdownComponent {
    constructor() {
        this.hostClass = true;
    }
}
DropdownComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DropdownComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
DropdownComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: DropdownComponent, selector: "uic-dropdown", host: { properties: { "class.uic-dropdown": "this.hostClass" } }, ngImport: i0, template: "<p>dropdown works!</p>\n", styles: [":host{display:block}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: DropdownComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'uic-dropdown',
                    templateUrl: './dropdown.component.html',
                    styleUrls: ['./dropdown.component.scss']
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.uic-dropdown']
            }] } });

class FormComponentsModule {
}
FormComponentsModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: FormComponentsModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
FormComponentsModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: FormComponentsModule, declarations: [DropdownComponent, ChecklistComponent], imports: [CommonModule], exports: [DropdownComponent, ChecklistComponent] });
FormComponentsModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: FormComponentsModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: FormComponentsModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [DropdownComponent, ChecklistComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [DropdownComponent, ChecklistComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ChecklistComponent, DropdownComponent, FormComponentsModule };
//# sourceMappingURL=ui-components-form-components.js.map
