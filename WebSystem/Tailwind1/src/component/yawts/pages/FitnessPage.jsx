import { useState } from "react";
import Topbar from "../Component/Topbar";
import Intro from "../Component/Intro";
import ProgramList from "../Component/ProgramList";
import TrainerSection from "../Component/TrainerSection";
import Bottom from "../Component/Footer";
import TrainerProfile from "../Component/TrainerProfile";
import PlansSection from "../Component/PlansSection";

const Home = ({
  onViewPrograms,
  onGoHome,
  myPrograms,
  setMyPrograms,
}) => {
  const [showPlans, setShowPlans] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Trainer page (isolated view)
  if (selectedTrainer) {
    return (
      <TrainerProfile
        trainer={selectedTrainer}
        onBack={() => setSelectedTrainer(null)}
      />
    );
  }

  // Plans page (isolated view)
  if (showPlans) {
    return (
      <PlansSection onBack={() => setShowPlans(false)} />
    );
  }

  return (
    <>
      <Topbar
        onGoHome={onGoHome}
        onViewPrograms={onViewPrograms}
      />

      <Intro
        myPrograms={myPrograms}
        setMyPrograms={setMyPrograms}
        onViewPlans={() => setShowPlans(true)}
      />

      <ProgramList />

      <TrainerSection
        onSelectTrainer={setSelectedTrainer}
      />

      <Bottom />
    </>
  );
};

export default Home;