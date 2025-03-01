const MatchListItem = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-[#0B0E12] rounded-[5px]">
      <div className="flex justify-center items-center gap-4">
        <img
          src="/src/assets/icons/commands-icon.png"
          alt="иконка команды"
        ></img>
        <span>Command N1</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-[7px]">
          <span>2</span>
          <span>:</span>
          <span>1</span>
        </div>

        <div className="flex justify-center items-center py-[6px] px-[2px] w-[92px] h-[26px] bg-[#43AD28]">
          <span>Live</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <span>Command №2</span>
        <img
          src="/src/assets/icons/commands-icon.png"
          alt="иконка команды"
        ></img>
      </div>
    </div>
  );
};

export default MatchListItem;
