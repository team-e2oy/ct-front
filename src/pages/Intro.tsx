import { Link } from 'react-router'

const Logo = () => {
  return (
    <>
      <h1>Catch Timing</h1>
    </>
  )
}

const Intro = () => {
  return (
    <>
      <Logo />
      <div>
        <Link to="/login">
          <button>로그인</button>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/regist">
          <button>회원가입</button>
        </Link>
      </div>
    </>
  )
}

export default Intro
