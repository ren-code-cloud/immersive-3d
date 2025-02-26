import Header from "./components/Header";
import Description from "./components/Description";
import ModelViewer from "./components/ModelViewer";

const App = () => {
  return (
    <div className="h-screen">
      <Header />
      <div className="bg-[#96000D] h-full w-full flex items-center justify-center">
        <ModelViewer />
        <Description />
      </div>
    </div>
  );
};

export default App;
