export class ResponseWrapper<T> {
  constructor(public content: T, public msg: string) {
  }
}
