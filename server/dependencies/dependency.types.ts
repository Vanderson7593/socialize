export interface TMakeDependency<T> {
  (arrayData: T[], data: T): T[]
}
