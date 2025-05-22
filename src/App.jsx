import "./App.css";
import  Header from "./components/Header";
import Entry from "./components/Entry";
import Data from "./data";

function App() {
  const entryData = Data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
    )
  });

  return (
    <>
      <Header />
      <main className="container">
        {entryData}
      </main>
    </>
  );
}

export default App;
