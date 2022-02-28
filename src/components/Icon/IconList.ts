/* eslint-disable @typescript-eslint/no-explicit-any */

function importAll(r: any) {
  return r.keys().map((r: string) => r.replace(/.\/|.svg/g, ''))
}

function importAllAsObject(r: any) {
  return r.keys().reduce((acc: any, r: string) => {
    const replaced = r.replace(/.\/|.svg/g, '')

    return {
      ...acc,
      [replaced]: replaced,
    }
  }, {})
}

export const iconArray: string[] = importAll(
  require.context('../../assets/svg/', false, /\.svg$/)
)

export const iconObject = importAllAsObject(
  require.context('../../assets/svg/', false, /\.svg$/)
)
