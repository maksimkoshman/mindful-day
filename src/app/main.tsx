import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@mantine/core/styles.css'
import './index.css'
import { MantineProvider } from '@mantine/core'
import { Home } from '@pages/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider>
      <Home />
    </MantineProvider>
  </StrictMode>
)
