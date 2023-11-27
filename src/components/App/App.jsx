import axios from "axios";
import "./App.css";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min.js";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
import About from "../About/About.jsx";
import Nav from "./Nav.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/home">
          <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
          </header>
          <br />
          <StudentForm />
        </Route>
        <Route exact path="/allStudents">
          <p>Student list:</p>
          <StudentList />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
    </div>
  );
}

export default App;
