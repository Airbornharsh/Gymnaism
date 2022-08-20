import RoutesContainer from "./Routes";
import { API, Auth } from "aws-amplify";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const check = async () => {
      try {
        const data = await Auth.currentAuthenticatedUser();
        console.log(data);
      } catch (e) {
        
      }
    };

    check();
  }, []);
  
  return (
    <div className="App">
      <RoutesContainer />
    </div>
  );
}

export default App;
