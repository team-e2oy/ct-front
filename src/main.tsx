import {StrictMode, Suspense} from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router"
import './index.css'
import LoadingSpinner from "./components/common/LoadingSpinner.tsx";
// import App from "./pages/App.tsx";
import SampleApp from "./sample/SampleApp.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<LoadingSpinner isLoading={true} /> } >
          {/*<App />*/}
          <SampleApp />
        </Suspense>
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </StrictMode>
  </BrowserRouter>
)
