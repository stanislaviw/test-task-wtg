import "./App.css";
import { Header } from "./layout/header";
import { List } from "./list/list";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export const App = (): JSX.Element => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="container">
        <Header />
        <main className="content">
          <List />
        </main>
      </div>
    </LocalizationProvider>
  );
};
