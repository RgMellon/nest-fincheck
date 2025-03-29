import { ArgumentMetadata, ParseEnumPipe } from '@nestjs/common';
export declare class OptionalEnumPipe<T = any> extends ParseEnumPipe<T> {
    transform(value: T, metadata: ArgumentMetadata): Promise<any>;
}
