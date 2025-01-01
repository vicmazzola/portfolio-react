import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import './tailwind-output.css';
import './lib/i18n.ts'



import Main from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)


