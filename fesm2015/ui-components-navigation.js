import * as i0 from '@angular/core';
import { Component, HostBinding, Input, NgModule } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/router';
import { RouterModule } from '@angular/router';

class NavBarComponent {
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

class NavigationModule {
}
NavigationModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: NavigationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NavigationModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: NavigationModule, declarations: [NavBarComponent], imports: [CommonModule,
        RouterModule], exports: [NavBarComponent] });
NavigationModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: NavigationModule, imports: [[
            CommonModule,
            RouterModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.8", ngImport: i0, type: NavigationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [NavBarComponent],
                    imports: [
                        CommonModule,
                        RouterModule
                    ],
                    exports: [NavBarComponent]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { NavBarComponent, NavigationModule };
//# sourceMappingURL=ui-components-navigation.js.map
