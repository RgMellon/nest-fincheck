import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const CurrentUserId = createParamDecorator<undefined>(
  (_, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    if (!request.userId) {
      throw new UnauthorizedException();
    }

    return {
      userId: request.userId,
    };
  },
);
