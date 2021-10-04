import { Component, HostBinding, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/router";
export class NavBarComponent {
    constructor() {
        this.hostClass = true;
    }
}
NavBarComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: NavBarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
NavBarComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.8", type: NavBarComponent, selector: "uic-nav-bar", inputs: { routes: "routes" }, host: { properties: { "class.uic-nav-bar": "this.hostClass" } }, ngImport: i0, template: "<nav>\n  <ul>\n    <li *ngFor=\"let route of routes\" [routerLink]=\"route.path\" routerLinkActive=\"active\">\n      {{route.title}}\n    </li>\n  </ul>\n</nav>\n", styles: [":host{display:block}\n"], directives: [{ type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i2.RouterLinkActive, selector: "[routerLinkActive]", inputs: ["routerLinkActiveOptions", "routerLinkActive"], exportAs: ["routerLinkActive"] }, { type: i2.RouterLink, selector: ":not(a):not(area)[routerLink]", inputs: ["routerLink", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: NavBarComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'uic-nav-bar',
                    templateUrl: './nav-bar.component.html',
                    styleUrls: ['./nav-bar.component.scss']
                }]
        }], propDecorators: { hostClass: [{
                type: HostBinding,
                args: ['class.uic-nav-bar']
            }], routes: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy91aS1jb21wb25lbnRzL25hdmlnYXRpb24vbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3VpLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBUTVELE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBT0UsY0FBUyxHQUFHLElBQUksQ0FBQztLQUlsQjs7NEdBTlksZUFBZTtnR0FBZixlQUFlLGtKQ1I1QixxS0FPQTsyRkRDYSxlQUFlO2tCQUwzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixXQUFXLEVBQUUsMEJBQTBCO29CQUN2QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztpQkFDeEM7OEJBR0MsU0FBUztzQkFEUixXQUFXO3VCQUFDLG1CQUFtQjtnQkFJaEMsTUFBTTtzQkFETCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05hdlJvdXRlfSBmcm9tICcuL25hdi1yb3V0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3VpYy1uYXYtYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdi1iYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9uYXYtYmFyLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmF2QmFyQ29tcG9uZW50IHtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy51aWMtbmF2LWJhcicpXG4gIGhvc3RDbGFzcyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcm91dGVzOiBOYXZSb3V0ZVtdIHwgdW5kZWZpbmVkO1xufVxuIiwiPG5hdj5cbiAgPHVsPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgcm91dGUgb2Ygcm91dGVzXCIgW3JvdXRlckxpbmtdPVwicm91dGUucGF0aFwiIHJvdXRlckxpbmtBY3RpdmU9XCJhY3RpdmVcIj5cbiAgICAgIHt7cm91dGUudGl0bGV9fVxuICAgIDwvbGk+XG4gIDwvdWw+XG48L25hdj5cbiJdfQ==