import Header from "./components/Header";
import MatchList from "./components/MatchList";

function App() {
  return (
    <>
      <div className="container mx-auto p-[42px] bg-[#06080C]  max-w-[1920px] h-[100vh]">
        <Header />
        <MatchList />
      </div>
    </>
  );
}

export default App;
