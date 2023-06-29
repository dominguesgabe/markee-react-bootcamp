import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Root } from 'root'

const root = ReactDOM.createRoot(
  document.querySelector('[data-js="app"]') as HTMLElement,
)
root.render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
