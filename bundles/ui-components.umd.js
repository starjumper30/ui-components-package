(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ui-components/data-grid'), require('ui-components/form-components'), require('ui-components/navigation'), require('ui-components/split-container')) :
	typeof define === 'function' && define.amd ? define('ui-components', ['exports', 'ui-components/data-grid', 'ui-components/form-components', 'ui-components/navigation', 'ui-components/split-container'], factory) :
	(global = global || self, factory(global['ui-components'] = {}, global['ui-components']['data-grid'], global['ui-components']['form-components'], global['ui-components'].navigation, global['ui-components']['split-container']));
}(this, (function (exports, dataGrid, formComponents, navigation, splitContainer) { 'use strict';

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	/**
	 * @fileoverview added by tsickle
	 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
	 */

	Object.defineProperty(exports, 'DataGridComponent', {
		enumerable: true,
		get: function () {
			return dataGrid.DataGridComponent;
		}
	});
	Object.defineProperty(exports, 'DataGridModule', {
		enumerable: true,
		get: function () {
			return dataGrid.DataGridModule;
		}
	});
	Object.defineProperty(exports, 'ChecklistComponent', {
		enumerable: true,
		get: function () {
			return formComponents.ChecklistComponent;
		}
	});
	Object.defineProperty(exports, 'DropdownComponent', {
		enumerable: true,
		get: function () {
			return formComponents.DropdownComponent;
		}
	});
	Object.defineProperty(exports, 'FormComponentsModule', {
		enumerable: true,
		get: function () {
			return formComponents.FormComponentsModule;
		}
	});
	Object.defineProperty(exports, 'NavBarComponent', {
		enumerable: true,
		get: function () {
			return navigation.NavBarComponent;
		}
	});
	Object.defineProperty(exports, 'NavigationModule', {
		enumerable: true,
		get: function () {
			return navigation.NavigationModule;
		}
	});
	Object.defineProperty(exports, 'SplitContainerComponent', {
		enumerable: true,
		get: function () {
			return splitContainer.SplitContainerComponent;
		}
	});
	Object.defineProperty(exports, 'SplitContainerModule', {
		enumerable: true,
		get: function () {
			return splitContainer.SplitContainerModule;
		}
	});

	Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ui-components.umd.js.map
