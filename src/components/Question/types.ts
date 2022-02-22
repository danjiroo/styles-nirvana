export type QuestionType = 'choice' | 'input' | 'confirmation'

export interface QuestionProps {
  /**
   * Question ID / index
   */
  index: number
  /**
   * Question text
   */
  question: string
  /**
   * Type of question
   */
  type: QuestionType
  /**
   * Can select more than one answer?
   */
  multipleChoice?: boolean
  /**
   * If question type is choice, provide an array of choices
   */
  choices?: string[]
}
