import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router"
import './index.css'
// import App from './App.tsx'
import SampleApp from "./sample/SampleApp.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        {/*<App />*/}
        <SampleApp />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
)
