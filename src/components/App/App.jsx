import axios from "axios";
import "./App.css";
import {
  HashRouter as Router,
  Route,
} from "react-router-dom/cjs/react-router-dom.min.js";
import StudentForm from "../StudentForm/StudentForm.jsx";
import StudentList from "../StudentList/StudentList.jsx";
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
          <p>
            I am making all of this up to be honest, this is a completely made
            up list of values, such as:
          </p>
          <li>Dont die</li>
          <li>Eat cheese</li>
          <li>Sleep hard</li>
        </Route>
      </Router>
    </div>
  );
}

export default App;
