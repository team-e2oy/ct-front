import '../assets/css/App.css'
import BeggarLife from './components/BeggarLife.tsx'
import {Route, Routes} from "react-router";
import Login from "./pages/LoginPage.tsx";

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
