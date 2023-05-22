import TextEditor from "./TextEditor"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom"
import { v4 as uuidV4 } from "uuid"
 import Navbar from './navbar/Navbar'
 
function App() {
  return (
    <>
     <section>
          <Navbar/>
        </section>
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* generate random id */}
          <Redirect to={`/documents/${uuidV4()}`} />
        </Route>
        <Route path="/documents/:id">
          <TextEditor />
        </Route>
      </Switch>
    </Router>
    </>
  )
}
 
export default App