import { Route, Routes } from 'react-router'
import Login from '../pages/Login.tsx'
import SampleIndex from '../pages/SampleIndex.tsx'
import Regist from '../pages/Regist.tsx'
import NotFound from '../pages/NotFound.tsx'

const MainRouter = () => {
  return (
    <Routes>
      <Route index element={<SampleIndex />} />
      <Route path="/login" element={<Login />} />
      <Route path="/regist" element={<Regist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default MainRouter
