export interface PageProps {
  user?: Record<string, unknown>
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}
