export interface HeaderProps {
  user?: Record<string, unknown>
  onLogin: () => void
  onLogout: () => void
  onCreateAccount: () => void
}
