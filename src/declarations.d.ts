/* eslint-disable @typescript-eslint/no-explicit-any */
// declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.svg'
declare module '*.eot'
declare module '*.ttf'
declare module '*.woff'
declare module '*.html'
declare module '*.css'

declare module '*.png' {
  const value: any
  export = value
}
