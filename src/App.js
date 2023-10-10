import react from "react";
import {routes, route} from 'react-router-dom'
import Fpage from "./Pages/Fpage";
import Layout from "./Components/layout";


function App() {
  return (
<Layout>
    <div  className="Fpage">
   <Fpage />
    </div>
</Layout>
  )
}
export default App;
