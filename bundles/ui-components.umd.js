(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ui-components/data-grid'), require('ui-components/form-components'), require('ui-components/navigation'), require('ui-components/split-container')) :
	typeof define === 'function' && define.amd ? define('ui-components', ['exports', 'ui-components/data-grid', 'ui-components/form-components', 'ui-components/navigation', 'ui-components/split-container'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ui-components"] = {}, global["ui-components"]["data-grid"], global["ui-components"]["form-components"], global["ui-components"].navigation, global["ui-components"]["split-container"]));
})(this, (function (exports, dataGrid, formComponents, navigation, splitContainer) { 'use strict';

	/**
	 * Generated bundle index. Do not edit.
	 */

	Object.keys(dataGrid).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return dataGrid[k]; }
		});
	});
	Object.keys(formComponents).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return formComponents[k]; }
		});
	});
	Object.keys(navigation).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return navigation[k]; }
		});
	});
	Object.keys(splitContainer).forEach(function (k) {
		if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
			enumerable: true,
			get: function () { return splitContainer[k]; }
		});
	});

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ui-components.umd.js.map
