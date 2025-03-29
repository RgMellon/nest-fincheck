"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUserId = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentUserId = (0, common_1.createParamDecorator)((_, context) => {
    const request = context.switchToHttp().getRequest();
    if (!request.userId) {
        throw new common_1.UnauthorizedException();
    }
    return request.userId;
});
//# sourceMappingURL=CurrentUserId.js.map