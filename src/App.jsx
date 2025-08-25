import "./App.css";
import QuotationGenerator from "./qutationGenerator";
import { Font } from "@react-pdf/renderer";
Font.register({
  family: "Cairo",
  src: "/src/assets/Cairo/static/Cairo-Regular.ttf",
});
function App() {
  return (
    <>
      <QuotationGenerator />
    </>
  );
}

export default App;
