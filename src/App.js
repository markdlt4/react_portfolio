import './App.css';
import Header from './comp/Header'
import Footer from './comp/Footer'
import About from './comp/About'
import Portfolio from './comp/Portfolio'
import Contact from './comp/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>

    <div>
      <Header />
      <Switch>
        <Route path="/portfolio"><Portfolio /></Route>
        <Route path="/contact"><Contact /></Route>
        <Route path="/"><About /></Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
