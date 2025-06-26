import type { ReactNode } from "react"
import { Component } from "react"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import { Ban } from "lucide-react"
import { Button } from "../components/ui/button"

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Usar hook en componente de clase: wrapper
      return <ErrorFallback onReload={this.handleReload} />
    }
    return this.props.children
  }
}

// Wrapper para usar useTranslation en fallback
function ErrorFallback({ onReload }: { onReload: () => void }) {
  const { t } = useTranslation()
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-[60vh] gap-6 p-6 text-center"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      role="alert"
      aria-live="assertive"
    >
      <Ban className="w-16 h-16 text-destructive mx-auto" />
      <h1 className="text-3xl font-bold">{t("error.title", "Something went wrong")}</h1>
      <p className="text-muted-foreground mb-4">{t("error.message", "An unexpected error occurred. Please try again or reload the page.")}</p>
      <Button onClick={onReload} variant="default">
        {t("error.reload", "Reload")}
      </Button>
    </motion.div>
  )
}

export default ErrorBoundary