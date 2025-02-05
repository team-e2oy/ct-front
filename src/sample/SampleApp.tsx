import '../assets/css/App.css'
import BeggarLife from './components/BeggarLife.tsx'
import {Route, Routes} from "react-router";
import {lazy} from "react";

// Suspense 로딩 예시 2초 뒤에 Login Page import
const Login = lazy(() =>
  new Promise((resolve) => setTimeout(() => resolve(import('./pages/Login.tsx')), 2000))
);

const SampleApp = () => {
  return (
    <>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="beggar-life" element={<BeggarLife />} />
      </Routes>
    </>
  )
}

export default SampleApp
