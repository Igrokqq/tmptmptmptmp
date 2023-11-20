import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/Home';
import BecomeALearner from './pages/become-a-learner/BecomeALearner';
import BecomeAnExpert from "./pages/become-an-expert/BecomeAnExpert";
import Learner from "./pages/learner/Learner";
import HomePage from "./pages/home-page/HomePage";
import DashboardPage from "./pages/dashboard-page/DashboardPage";
import ChatsPage from "./pages/chats-page/ChatsPage";
import CommunityPage from "./pages/community-page/CommunityPage";
import ProfilePage from "./pages/profile-page/ProfilePage";
import HelpPage from "./pages/help-page/HelpPage";
import WelcomePage from "./pages/welcome-page/WelcomePage";
import JoinPage from "./pages/join-page/JoinPage";
import LearnerRegistrationPage from "./pages/learner-registration-page/LearnerRegistrationPage";
import LearnerVerifyEmailPage from "./pages/learner-verify-email-page/LearnerVerifyEmailPage";
import LearnerEmailVerificationPage from "./pages/learner-email-verification-page/LearnerEmailVerificationPage";
import LearnerCongratsPage from "./pages/learner-congrats-page/LearnerCongratsPage";
import LearnerOnboardingPage from "./pages/learner-onboarding-page/LearnerOnboardingPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/become-a-learner" element={<BecomeALearner />} >
                        <Route path="welcome" element={<WelcomePage />} />
                        <Route path="join" element={<JoinPage isExpert={false}/>} />
                        <Route path="registration" element={<LearnerRegistrationPage />} />
                        <Route path="verify-email" element={<LearnerVerifyEmailPage />} />
                        <Route path="email-verification" element={<LearnerEmailVerificationPage />} />
                        <Route path="congrats" element={<LearnerCongratsPage />} />
                        <Route path="onboarding" element={<LearnerOnboardingPage />} />
                    </Route>
                    <Route path="/become-an-expert/*" element={<BecomeAnExpert />} />
                    <Route path="/learner" element={<Learner />} >
                        <Route index path="home" element={<HomePage />} />
                        <Route path="dashboard" element={<DashboardPage />} />
                        <Route path="chats" element={<ChatsPage />} />
                        <Route path="community" element={<CommunityPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="help" element={<HelpPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
