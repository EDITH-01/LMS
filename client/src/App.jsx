import{Route,Routes} from "react-router-dom";
import Authpage from "./pages/auth";

function App() {
  return (
    <>
    {/* <Button className='bg-red-600'>Check</Button> */}
   <Routes>
    <Route path="/auth" element={<Authpage/>}/>
   </Routes>
    </>
  )
}

export default App
