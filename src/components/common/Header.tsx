import { useNavigate } from 'react-router'

const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="header">
        <button onClick={() => navigate(-1)}>뒤로가기</button>
      </div>
    </>
  )
}

export default Header
