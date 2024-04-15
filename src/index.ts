export function sum(arr: number[]) {
  return arr.reduce((prev, current) => prev + current, 0 /* initial */)
}
