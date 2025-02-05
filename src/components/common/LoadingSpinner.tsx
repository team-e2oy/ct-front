import {ClipLoader} from "react-spinners";

// https://www.davidhu.io/react-spinners/
export default function LoadingSpinner({ isLoading }: { isLoading: boolean }) {
  return (
    <div>
      <ClipLoader loading={isLoading} />
    </div>
  );
}