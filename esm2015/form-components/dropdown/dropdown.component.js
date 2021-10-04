import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class DropdownComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktY29tcG9uZW50cy9mb3JtLWNvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvdWktY29tcG9uZW50cy9mb3JtLWNvbXBvbmVudHMvZHJvcGRvd24vZHJvcGRvd24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBT3JELE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFRRSxjQUFTLEdBQUcsSUFBSSxDQUFDO0tBRWxCOzs4R0FMWSxpQkFBaUI7a0dBQWpCLGlCQUFpQixzSENQOUIsMEJBQ0E7MkZETWEsaUJBQWlCO2tCQUw3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixXQUFXLEVBQUUsMkJBQTJCO29CQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztpQkFDekM7OEJBSUMsU0FBUztzQkFEUixXQUFXO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpYy1kcm9wZG93bicsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wZG93bi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Ryb3Bkb3duLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQge1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MudWljLWRyb3Bkb3duJylcbiAgaG9zdENsYXNzID0gdHJ1ZTtcblxufVxuIiwiPHA+ZHJvcGRvd24gd29ya3MhPC9wPlxuIl19