import {beggarLifeStore} from "../store/BeggarStore.ts";
import BeggarEmotion from "./BeggarEmotion.tsx"
import {Link} from "react-router";

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

  return (
    <>
      <Link to="/"><button>HOME</button></Link>

      <h1>거지키우기</h1>
      <BeggarEmotion />
      <div className="card">
        <MoneyState />
      </div>
      <div>
        <BtnGiveMoney />
        <BtnMolsu />
      </div>
    </>
  )
}

export default BeggarLife