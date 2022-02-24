export interface LogoProps {
  /**
   * Icon name or image link
   */
  src: string
  /** Placeholder text of image */
  alt: string
  /**
   * Logo orientation with name
   */
  orientation?: 'horizontal' | 'vertical'
  /**
   * Logo name
   */
  companyName?: string
  /**
   * Logo tag line
   */
  tagLine?: string
}
