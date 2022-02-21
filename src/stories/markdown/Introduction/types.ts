export interface ComponentProps {
  title: string
  content: string
  progress: 'completed' | 'pending' | 'inprogress'
  story_url: string
  dev?: string
}
