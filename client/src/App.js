import Home from "./containers/Home/Home";
import Student from "./containers/Product/Student";
import Teacher from "./containers/Product/Teacher";
import School from "./containers/Product/School";
import Coaching from "./containers/Product/Coaching";

import { Route, Switch } from "react-router-dom";
import Contact from "./containers/Contact/Contact";
import Blogs from "./containers/Blogs/Blogs";
import Detail from "./containers/Blogs/Details/Detail";
import SignIn from "./containers/SignIn/SignIn.jsx"
// import Mainregister from "./containers/Register/Mainregister/Mainregister"
import Register  from "./containers/Register/register"
function App() {
  return (
    <div>
      <Switch>
        <Route path = "/" exact component   = {Home} />
        <Route path = "/SignIn" component   = {SignIn} />
        <Route path = "/Register" component = {Register} />
        
        <Route path = "/student" component      = {Student} />
        <Route path = "/teacher" component      = {Teacher} />
        <Route path = "/school" component       = {School} />
        <Route path = "/coaching" component     = {Coaching} />
        <Route path = "/contact" component      = {Contact} />
        <Route path = "/blog" component         = {Blogs} />
        <Route path = "/blogs/detail" component = {Detail} />
      </Switch>
    </div>
  );
}

export default App;
