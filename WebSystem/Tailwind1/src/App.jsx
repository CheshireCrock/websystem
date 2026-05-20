import { useState } from "react";
import Home from "../src/component/yawts/pages/FitnessPage";
import MyPrograms from "../src/component/yawts/Component/MyPrograms";

function App() {
  const [showPrograms, setShowPrograms] = useState(false);
  const [myPrograms, setMyPrograms] = useState([]);

  return (
    <div className="relative">
      <Home
        onViewPrograms={() => setShowPrograms(true)}
        onGoHome={() => setShowPrograms(false)}
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
      />

      {showPrograms && (
        <div className="fixed inset-0 z-100 bg-black overflow-y-auto">
          <MyPrograms
            onBack={() => setShowPrograms(false)}
            myPrograms={myPrograms}
            setMyPrograms={setMyPrograms}
          />
        </div>
      )}
    </div>
  );
}

export default App;