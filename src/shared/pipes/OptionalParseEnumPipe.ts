import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';

export class OptionalEnumPipe<T = any> extends ParseEnumPipe<T> {
  override transform(value: T, metadata: ArgumentMetadata): Promise<any> {
    if (typeof value === 'undefined') {
      return undefined;
    }

    return super.transform(value, metadata);
  }
}
