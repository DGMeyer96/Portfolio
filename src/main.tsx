import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import AppTheme from './theme/AppTheme.tsx'
import ColorModeSelect from './theme/ColorModeSelect.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTheme disableCustomTheme={false}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />
      <App/>
    </AppTheme>
  </StrictMode>,
)
