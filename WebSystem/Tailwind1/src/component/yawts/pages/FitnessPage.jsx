import React from 'react'
import Topbar from '../Component/Topbar'
import Intro from '../Component/Intro'
import Footer from '../../Footer'
import ProgramList from '../Component/ProgramList'
import TrainerSection from '../Component/Trainersection'
const FitnessPage = () => {
  return (
    <div> 
        <Topbar/>  
        <Intro/> 
        <ProgramList/>
        <TrainerSection/>
        <Footer />
        </div>

) 
}

export default FitnessPage