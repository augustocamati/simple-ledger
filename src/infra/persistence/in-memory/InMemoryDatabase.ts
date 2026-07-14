export class InMemoryDatabase {
  public readonly accounts = new Map<string, any>()
  public readonly transactions = new Map<string, any>()
}