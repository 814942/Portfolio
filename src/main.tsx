import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { AppRouter } from './routes'

import './lib/i18n.ts'
import ErrorBoundary from './components/ErrorBoundary.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
  </StrictMode>,
)
