export class CreateOrderDto {
  readonly name: string;
  readonly stockCode: string;
  readonly size: string;
  readonly color: string;
  readonly personalization: string;
  readonly note: string;
  readonly quantity: number;
  readonly price: number;
  readonly status: string;

  // Define file as an object with a `path` property

  file: string;
}
