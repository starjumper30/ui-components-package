import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class DataGridComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS1ncmlkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWNvbXBvbmVudHMvZGF0YS1ncmlkL2RhdGEtZ3JpZC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1jb21wb25lbnRzL2RhdGEtZ3JpZC9kYXRhLWdyaWQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBT3JELE1BQU0sT0FBTyxpQkFBaUI7SUFMOUI7UUFPRSxjQUFTLEdBQUcsSUFBSSxDQUFDO0tBRWxCOzs4R0FKWSxpQkFBaUI7a0dBQWpCLGlCQUFpQix3SENQOUIsMkJBQ0E7MkZETWEsaUJBQWlCO2tCQUw3QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixXQUFXLEVBQUUsNEJBQTRCO29CQUN6QyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztpQkFDMUM7OEJBR0MsU0FBUztzQkFEUixXQUFXO3VCQUFDLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpYy1kYXRhLWdyaWQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZGF0YS1ncmlkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0YS1ncmlkLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRGF0YUdyaWRDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnVpYy1kYXRhLWdyaWQnKVxuICBob3N0Q2xhc3MgPSB0cnVlO1xuXG59XG4iLCI8cD5kYXRhLWdyaWQgd29ya3MhPC9wPlxuIl19