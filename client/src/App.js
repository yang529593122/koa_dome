import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./views";

function App() {
  return (
    <>
        <BrowserRouter>
            <Header  />
            <Route path='/' exact component={Home}></Route>
        </BrowserRouter>
    </>
  );
}

export default App;
