import { ClipLoader } from 'react-spinners'

/**
 * 로딩바 컴포넌트
 * @see https://www.davidhu.io/react-spinners/
 * @param isLoading
 * @constructor
 */
export default function LoadingSpinner({ isLoading }: { isLoading: boolean }) {
  return (
    <div>
      <ClipLoader loading={isLoading} />
    </div>
  )
}
