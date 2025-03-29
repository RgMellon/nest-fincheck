"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PUBLIC_KEY = void 0;
exports.IsPublic = IsPublic;
const common_1 = require("@nestjs/common");
exports.IS_PUBLIC_KEY = 'IS_PUBLIC';
function IsPublic() {
    return (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
}
//# sourceMappingURL=IsPublic.js.map