import Header from "./components/Header";
import MatchList from "./components/MatchList";
import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "./api/apiClient";

function App() {
  const { isFetching, isError, data, refetch } = useQuery({
    queryKey: ["matches"],
    queryFn: fetchMatches,
  });

  return (
    <>
      <div className="container mx-auto p-[42px] bg-[#06080C]  max-w-[1920px] h-[100vh]">
        <Header {...{ isFetching, isError, refetch }} />
        {isFetching && <div>Loading...</div>}
        {!isFetching && data && <MatchList matches={data} />}
      </div>
    </>
  );
}

export default App;
