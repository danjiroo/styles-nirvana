enum AsEnum {
  'image',
  'profile',
}

export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Placeholder text of image
   */
  alt: string
  /**
   * Custom classname for component
   */
  className?: string
  /**
   * Is fetching image?
   */
  isLoading?: boolean
  /**
   * Object fit in container
   */
  objectFit?: 'contain' | 'cover'
  /**
   * Placeholder image
   */
  placeholder?: string
  /**
   * Rounded edge?
   */
  rounded?: boolean
  /**
   * Link of image
   */
  src: string
  /**
   * Type of image
   */
  type?: keyof typeof AsEnum
}
