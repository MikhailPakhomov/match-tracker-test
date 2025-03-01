import MatchListItem from "../MatchListItem";
import { Match } from "../../api/types";
type TProps = {
  matches: Match[];
};

const MatchList: React.FC<TProps> = ({ matches }) => {
  return (
    <div className="grid grid-cols-1 gap-3">
      {matches.map((matchInfo: Match, index: number) => (
        <MatchListItem key={index} {...matchInfo} />
      ))}
    </div>
  );
};

export default MatchList;
