import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { toasterProps } from './common/constants.ts';
import { router }from './router.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
      <Toaster {...toasterProps} />
  </StrictMode>,
)
