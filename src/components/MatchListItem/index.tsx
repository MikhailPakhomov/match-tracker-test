import { Match } from "../../api/types";
import clsx from "clsx";

const MatchListItem: React.FC<Match> = ({
  awayScore,
  awayTeam,
  homeTeam,
  homeScore,
  status,
}) => {
  const statusClasses: Record<string, string> = {
    Finished: "bg-red-600", // #EB0237
    Ongoing: "bg-green-600", // #43AD28
    default: "bg-orange-600", // #EB6402
  };

  return (
    <div className="flex justify-between items-center p-4 bg-[#0B0E12] rounded-[5px]">
      <div className="flex justify-center items-center gap-4">
        <img
          src="/src/assets/icons/commands-icon.png"
          alt="иконка команды"
        ></img>
        <span>{awayTeam.name}</span>
      </div>

      <div className="flex flex-col items-center">
        <div className="flex justify-center items-center gap-[7px]">
          <span>{awayScore}</span>
          <span>:</span>
          <span>{homeScore}</span>
        </div>

        <div
          className={clsx(
            "flex justify-center items-center py-[6px] px-[2px] w-[92px] h-[26px]",
            statusClasses[status] || statusClasses.default
          )}
        >
          <span>{status}</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-4">
        <span>{homeTeam.name}</span>
        <img
          src="/src/assets/icons/commands-icon.png"
          alt="иконка команды"
        ></img>
      </div>
    </div>
  );
};

export default MatchListItem;
