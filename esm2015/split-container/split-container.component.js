import { Component, HostBinding } from '@angular/core';
import * as i0 from "@angular/core";
export class SplitContainerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWNvbXBvbmVudHMvc3BsaXQtY29udGFpbmVyL3NwbGl0LWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1jb21wb25lbnRzL3NwbGl0LWNvbnRhaW5lci9zcGxpdC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBT3JELE1BQU0sT0FBTyx1QkFBdUI7SUFMcEM7UUFPRSxjQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOztvSEFIWSx1QkFBdUI7d0dBQXZCLHVCQUF1QixvSUNQcEMsZ2hCQWNBOzJGRFBhLHVCQUF1QjtrQkFMbkMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQixXQUFXLEVBQUUsa0NBQWtDO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztpQkFDaEQ7OEJBR0MsU0FBUztzQkFEUixXQUFXO3VCQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBIb3N0QmluZGluZ30gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpYy1zcGxpdC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BsaXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3BsaXQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRDb250YWluZXJDb21wb25lbnQge1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnVpYy1zcGxpdC1jb250YWluZXInKVxuICBob3N0Q2xhc3MgPSB0cnVlO1xufVxuIiwiPGRpdiBjbGFzcz1cInNwbGl0IHZlcnRpY2FsXCI+XG4gIDxkaXYgY2xhc3M9XCJzcGxpdCBob3Jpem9udGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsIHRvcCBsZWZ0XCI+XG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCIucGFuZWwtY29udGVudC0xXCI+PC9uZy1jb250ZW50PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiLnBhbmVsLWNvbnRlbnQtMlwiPjwvbmctY29udGVudD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJzcGxpdCBob3Jpem9udGFsXCI+XG4gICAgPGRpdiBjbGFzcz1cInBhbmVsIGJvdHRvbSBsZWZ0XCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLnBhbmVsLWNvbnRlbnQtM1wiPjwvbmctY29udGVudD48L2Rpdj5cbiAgICA8ZGl2ICBjbGFzcz1cInBhbmVsXCI+PG5nLWNvbnRlbnQgc2VsZWN0PVwiLnBhbmVsLWNvbnRlbnQtNFwiPjwvbmctY29udGVudD48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==