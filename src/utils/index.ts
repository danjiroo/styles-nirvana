export { default as makeData } from './makeData'
export { default as useMediaPlayer } from './useMediaEditor'

export const capFirstLetterForEachWord = (str = ''): string =>
  str
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase())
