/* eslint-disable @typescript-eslint/no-explicit-any */

function importAll(r: any) {
  return r.keys().map((r: string) => r.replace(/.\/|.svg/g, ''))

  // return a ReactComponent
  // return r.keys().map(r)
}

export const iconArray = importAll(
  require.context('../../assets/svg/', false, /\.svg$/)
)
