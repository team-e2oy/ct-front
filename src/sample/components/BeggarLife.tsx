import {beggarLifeStore} from "../store/BeggarStore.ts";
import BeggarEmotion from "./BeggarEmotion.tsx"
import {useEffect} from "react";

const BeggarLife = () => {

  const MoneyState = () => {
    const count = beggarLifeStore((state) => state.money)
    return <p>김경빈님의 전재산 : {count}</p>
  }

  const BtnGiveMoney = () => {
    const increaseCount = beggarLifeStore(state => state.increase)
    return <button onClick={increaseCount}>기부하기!</button>
  }

  const BtnMolsu = () => {
    return <button onClick={beggarLifeStore(state => state.clear)}>전재산 몰수하기</button>
  }

  const GithubLogin = () => {
    // window.location.href = "https://github.com/login/oauth/authorize?client_id=Ov23liHhRhGErz7N8E4u&redirect_uri=http://localhost:8080/login/oauth2/code/github&scope=user";
    window.location.href = "http://localhost:8080/oauth2/authorization/github";
  }


  const GithubLoginBtn = () => {
    return <button onClick={GithubLogin}>깃허브 로그인</button>
  }

  useEffect(() => {
      const token = new URLSearchParams(window.location.search).get("token");
      if (token) {
          alert('Token : ' + token);
      }
  }, []);

  return (
    <>
      <h1>거지키우기</h1>
      <BeggarEmotion />
      <div className="card">
        <MoneyState />
      </div>
      <div>
        <BtnGiveMoney />
        <BtnMolsu />
        <GithubLoginBtn />
      </div>
    </>
  )
}

export default BeggarLife