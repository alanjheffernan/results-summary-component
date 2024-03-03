import ResultsCard from "./components/ResultsCard";
import SummaryCard from "./components/SummaryCard";

function App() {
  return (
    <section className=" min-h-screen w-full flex items-start md:items-center justify-center md:bg-pale-blue">
      <div className="flex flex-col w-full md:w-[736px] md:flex-row md:bg-white md:rounded-r-3xl">
        <ResultsCard />
        <SummaryCard />
      </div>
    </section>
  );
}

export default App;
