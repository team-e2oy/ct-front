import {Link} from "react-router";

const Login = () => {
  // 로그인 폼 제출 시 호출되는 핸들러 함수
  const handleSubmit = (e) => {
    e.preventDefault(); // 기본 폼 제출 이벤트 취소
    // 실제 로그인 인증 로직은 이곳에 추가하면 됩니다.
    console.log("로그인 폼 제출됨");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>로그인</h2>

        <div>
          <label htmlFor="username">아이디</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="아이디 입력"
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호 입력"
          />
        </div>

        <button type="submit">로그인</button>
      </form>

      <Link to="/beggar-life">
        <button>거지 키우기</button>
      </Link>
    </div>
  )
}

export default Login