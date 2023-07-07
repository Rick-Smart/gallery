import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import App_tester from "./components/App_tester";
import App_footer from "./components/App_footer/App_footer";

function App() {
  return (
    <>
      <div className="App">
        <App_tester />
        <App_footer />
      </div>
    </>
  );
}

export default App;
