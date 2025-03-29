"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionalEnumPipe = void 0;
const common_1 = require("@nestjs/common");
class OptionalEnumPipe extends common_1.ParseEnumPipe {
    transform(value, metadata) {
        if (typeof value === 'undefined') {
            return undefined;
        }
        return super.transform(value, metadata);
    }
}
exports.OptionalEnumPipe = OptionalEnumPipe;
//# sourceMappingURL=OptionalParseEnumPipe.js.map