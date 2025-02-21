import '../assets/css/App.css'
import MainRouter from '../routes/Routes.tsx'
import Footer from '../components/common/Footer.tsx'
import Header from '../components/common/Header.tsx'

function App() {
  return (
    <>
      <Header />
      <MainRouter />
      <Footer />
    </>
  )
}

export default App
