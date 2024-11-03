"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jwt = require("jsonwebtoken");
const util_1 = require("util");
const verifyToken = (token, secret, options) => {
    return (0, util_1.promisify)(jwt.verify)(token, secret, options);
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=verifyToken.js.map