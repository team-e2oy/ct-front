import { Link } from 'react-router'
import { useEffect } from 'react'
import axios from 'axios'

const Login = () => {
  // 로그인 폼 제출 시 호출되는 핸들러 함수
  const handleSubmit = (e) => {
    e.preventDefault() // 기본 폼 제출 이벤트 취소
    alert('로그인 버튼 누름!')
  }

  const GithubLogin = () => {
    // window.location.href = "https://github.com/login/oauth/authorize?client_id=Ov23liHhRhGErz7N8E4u&redirect_uri=http://localhost:8080/login/oauth2/code/github&scope=user";
    window.location.href = 'http://localhost:8080/oauth2/authorization/github'
  }

  const GithubLoginBtn = () => {
    return <button onClick={GithubLogin}>깃허브 로그인</button>
  }

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get('token')
    if (token) {
      alert('Token : ' + token)
    }
  }, [])

  const getMember = async () => {
    axios
      .get('/members')
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {})
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
        <br />
        <GithubLoginBtn />
      </form>

      <div>
        <button onClick={getMember}>회원님들 가져오기</button>
        <Link to="/beggar-life">
          <button>거지 키우기</button>
        </Link>
      </div>
    </div>
  )
}

export default Login
