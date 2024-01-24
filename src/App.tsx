import "./App.css";
import { Header } from "./layout/header";

export const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <div className="content"></div>
    </div>
  );
};
