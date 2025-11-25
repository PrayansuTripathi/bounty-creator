import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateBounty from './CreateBounty';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateBounty />
  </StrictMode>,
)
