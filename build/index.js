"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = testPackage_3;

var _util = require("util");

const LOG = (0, _util.debuglog)('@mnp-test/test-package-3');
/**
 * test-description
 * @param {Config} config Configuration object.
 * @param {string} config.type The type.
 */

async function testPackage_3(config = {}) {
  const {
    type
  } = config;
  LOG('@mnp-test/test-package-3 called with %s', type);
  return type;
}
/**
 * @typedef {Object} Config
 * @property {string} type The type.
 */
//# sourceMappingURL=index.js.map