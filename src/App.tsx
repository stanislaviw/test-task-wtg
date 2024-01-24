import "./App.css";
import { Header } from "./layout/header";
import { List } from "./list/list";

export const App = (): JSX.Element => {
  return (
    <div className="container">
      <Header />
      <main className="content">
        <List />
      </main>
    </div>
  );
};
