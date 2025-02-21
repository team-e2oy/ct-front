const Login = () => {
  return (
    <>
      <h2>로그인</h2>
      <div>
        <span>아이디</span>
        <div>
          <input
            type="text"
            placeholder="아이디"
            value=""
            onChange={(event) => {
              // TODO validation
              console.log(event.target.value)
            }}
          />
        </div>
      </div>
      <div>
        <span>비밀번호</span>
        <div>
          <input
            type="password"
            placeholder="비밀번호는 뭐가 어쩌구 저쩌구"
            onChange={(event) => {
              // TODO validation
              console.log(event.target.value)
            }}
          />
        </div>
      </div>
      <br />
      <div>
        <button>로그인</button>
      </div>
      <div>
        <button>네이버 로그인</button>
      </div>
      <div>
        <button>구글 로그인</button>
      </div>
    </>
  )
}

export default Login
