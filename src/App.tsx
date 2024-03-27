import TableOfTags from "./components/TableOfTags";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="lg:max-w-[40%] w-full flex flex-col items-center m-3 p-10 lg:p-0">
        <TopBar />
        <TableOfTags />
      </div>
    </div>
  );
}

export default App;
