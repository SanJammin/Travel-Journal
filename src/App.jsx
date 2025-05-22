import "./App.css";
import  Header from "./components/Header";
import Entry from "./components/Entry";
import Data from "./data";

function App() {
  const entryData = Data.map((entry) => {
    return (
      <Entry
        key={entry.id}
        img={entry.img}
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
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
