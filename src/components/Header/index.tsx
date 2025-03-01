import Error from "../Error";
import Loader from "../Loader";

type TProps = {
  isFetching: boolean;
  isError: boolean;
  refetch: () => void;
};
const Header: React.FC<TProps> = ({ isFetching, isError, refetch }) => {
  return (
    <div className="flex justify-between mb-[22px]">
      <h1 className="font-[Tactic] text-3xl">Match Tracker</h1>
      <div className="flex gap-3">
        {isError && <Error />}

        <button
          onClick={() => refetch()}
          disabled={isFetching}
          className="flex justify-center gap-[12px] items-center w-[204px] p-4 bg-[#A01131] text-[18px] font-semibold rounded-[5px] cursor-pointer disabled:bg-[#701328] hover:bg-[#EB0237]"
        >
          Обновить
          {isFetching && <Loader />}
        </button>
      </div>
    </div>
  );
};

export default Header;
