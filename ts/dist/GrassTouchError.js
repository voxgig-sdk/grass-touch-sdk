"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrassTouchError = void 0;
class GrassTouchError extends Error {
    isGrassTouchError = true;
    sdk = 'GrassTouch';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.GrassTouchError = GrassTouchError;
//# sourceMappingURL=GrassTouchError.js.map