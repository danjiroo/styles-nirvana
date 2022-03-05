export type QuestionType = 'choice' | 'input' | 'confirmation'

export interface QuestionActions {
  handleEditQuestion: (id: string) => void
  handlePreviewQuestion: (id: string) => void
  handleRemoveQuestion: (id: string) => void
}

export interface QuestionProps extends Partial<QuestionActions> {
  /**
   * UUID
   */
  id: string
  /**
   * Question title / name
   */
  name: string
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
