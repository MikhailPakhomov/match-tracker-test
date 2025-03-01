import Error from "../Error";
import Loader from "../Loader";

const Header = () => {
  return (
    <div className="flex justify-between mb-[22px]">
      <h1 className="font-[Tactic] text-3xl">Match Tracker</h1>
      <div className="flex gap-3">
        <Error />
        <button className="flex justify-center gap-[12px] items-center w-[204px] p-4 bg-[#EB0237] text-[18px] font-semibold rounded-[5px] cursor-pointer">
          Обновить
          <Loader />
        </button>
      </div>
    </div>
  );
};

export default Header;
