import { Link } from 'react-router'

const SampleIndex = () => {
  return (
    <>
      <h2>샘플 인덱스 페이지</h2>
      <div>
        <Link to="/login">
          <button>로그인 페이지</button>
        </Link>
      </div>
      <br />
      <div>
        <Link to="/regist">
          <button>회원가입 페이지</button>
        </Link>
      </div>
    </>
  )
}

export default SampleIndex
