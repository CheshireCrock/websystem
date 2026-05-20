import Topbar from "../Component/Topbar";
import Intro from "../Component/Intro";
import ProgramList from "../Component/ProgramList";
import Trainer from "../Component/Trainersection";
import Bottom from "../Component/Footer";

const FitnessPage = ({ onViewPrograms, onGoHome, myPrograms, setMyPrograms }) => {
  return (
    <>
      <Topbar onGoHome={onGoHome} onViewPrograms={onViewPrograms} />

      <Intro
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
        onViewPrograms={onViewPrograms}
      />

      <ProgramList />
      <Trainer />
      <Bottom />
    </>
  );
};

export default FitnessPage;