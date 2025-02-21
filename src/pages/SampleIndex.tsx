import { Link } from 'react-router'

const SampleIndex = () => {
  return (
    <>
      <h2>샘플 인덱스 페이지</h2>
      <div>
        <Link to="/intro">
          <button>인트로 페이지</button>
        </Link>
      </div>
      <br />
      <div></div>
    </>
  )
}

export default SampleIndex
