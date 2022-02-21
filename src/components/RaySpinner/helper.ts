export function topCalc(rayWidth?: number): string | undefined {
  if (rayWidth) return `${String(rayWidth / 2) + 'px'}`
  return
}

export function leftCalc(size?: number, rayWidth?: number): string | undefined {
  if (size && rayWidth) {
    const halfSize = size / 2
    const halfRayWidth = rayWidth / 2
    return `${String(halfSize - halfRayWidth) + 'px'}`
  }
  return
}

export function transformCalc(size?: number): string | undefined {
  if (size) {
    const halfSize = String(size / 2)
    return `${halfSize}px ${halfSize}px`
  }
  return
}

export function iterateDelay(idx: number, n: number): number {
  const i = idx / 10
  const a = n + i
  const b = n + 1.1
  const res = a - b

  return Math.round((res + Number.EPSILON) * 100) / 100
}
