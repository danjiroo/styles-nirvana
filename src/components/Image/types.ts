enum AsEnum {
  'image',
  'profile',
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string
  className?: string
  isLoading?: boolean
  objectFit?: 'contain' | 'cover'
  placeholder?: string
  rounded?: boolean
  src: string
  type?: keyof typeof AsEnum
}
