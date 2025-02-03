import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home'; // Home component
import App from "../App";

import Dashboard from '../pages/ProfileDashboard/Profile/Profile';
import ProfileBuilding from '../pages/ProfileDashboard/UpdateProfile/UpdateProfile';
import RoleManagement from '../pages/RoleManagement';

import ProtectedRoute from './ProtectedRoute';
import Unauthorized from '../pages/Auth/CommonInterface/Unauthorized'; // Add unauthorized page
import Logout from '../pages/Auth/CommonInterface/Logout';
import AiPeer from '../pages/AIMentorcumPeer/AiPeer';
import Login from '../pages/Auth/StudentInterface/StudentLogin/StudentLogin';
import Register from '../pages/Auth/StudentInterface/StudentSignup/StudentSignup';

import AdminLogin from '../pages/Auth/AdminInterface/AdminLogin';
import AdminRegister from '../pages/Auth/AdminInterface/AdminRegister';

import ReporterLogin from '../pages/Auth/WorkingProInterface/WorkingLogin';
import ReporterRegister from '../pages/Auth/WorkingProInterface/WorkingRegister';
import HomePage from '../pages/WelcomePage/HomePage/HomePage';
import AcademicTab from '../pages/Tabs/AcademicTab/AcademicTab';
import CareerGrowthTab from '../pages/Tabs/CareerGrowthTab/CareerGrowthTab';
import StudentCareerTab from '../pages/Tabs/StudentCareerTab/StudentCareerTab';
import UpskillingTab from '../pages/Tabs/UpskillingTab/UpskillingTab';
import CareerSwitchTab from '../pages/Tabs/CareerSwitchTab/CareerSwitchTab';
import UserProfile from '../pages/Profile/Profile';
import AiProf from '../pages/AIMentorcumPeer/AiProf';
import AiMentor from '../pages/AIMentorcumPeer/AiMentor';
import RoadMap from '../pages/SetGoal/SetGoal';
import KAQuiz from '../pages/KnowledgeAssesment/KnowledgeAssement';
import WpRoadMap from '../pages/RoadMap/WpRoadMap';
import StuRoadmap from '../pages/RoadMap/StudentRoadMap';
import EvaluationPage from '../pages/KnowledgeAssesment/Evaluation';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/student/login', element: <Login /> },
      { path: '/student/register', element: <Register /> },
      { path: 'logout', element: <Logout /> },
      { path: '/admin/register', element: <AdminRegister /> },
      { path: '/admin/login', element: <AdminLogin /> },
      { path: '/unauthorized', element: <Unauthorized /> }, // Add unauthorized page route
      { path: '/wp/login', element: <ReporterLogin /> },
      { path: '/wp/register', element: <ReporterRegister/> },
      {

        path:'/Roadmap',
        element:(
          <ProtectedRoute roles={['Admin','Student','Working_Pro']}>
            <StuRoadmap/>
          </ProtectedRoute>
        )
      }
     ,{

      path:'/UpdatedRoadmap',
      element:(
        <ProtectedRoute roles={['Admin','Working_Pro','Student']}>
          <WpRoadMap/>
        </ProtectedRoute>
      )
    }
   ,
      
      
      {
        path: '/dashboard',
        element: (
          <ProtectedRoute roles={['Admin', 'Student', 'Working_Pro']}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: '/admin/users',
        element: (
          <ProtectedRoute roles={['Admin']}>
            <RoleManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: '/updateProfile',
        element: (
          <ProtectedRoute roles={['Admin', 'Student', 'Working_Pro']}>
           <ProfileBuilding/>
          </ProtectedRoute>
        ),
      },{
        path: '/welcomePage',
        element: (
          <ProtectedRoute roles={['Admin', 'Student', 'Working_Pro']}>
          <HomePage/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/interativeProfileBuilding',
        element: (
          <ProtectedRoute roles={['Admin', 'Student', 'Working_Pro']}>
          <ProfileBuilding/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/studentProfile',
        element: (
          <ProtectedRoute roles={['Admin', 'Student']}>
        <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: '/workingProfenalProfile',
        element: (
          <ProtectedRoute roles={['Admin', 'Working_Pro']}>
       <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path:'/studentProfile/AcademicTab',
        element:(
          <ProtectedRoute roles={['Admin','Student']}>
            <AcademicTab/>
          </ProtectedRoute>
        )
      },
      {
        path:'/studentProfile/StudentCareerTab',
        element:(
          <ProtectedRoute roles={['Admin','Student']}>
            <StudentCareerTab/>
          </ProtectedRoute>
        )
      },
      {
        path:'/workingProfenalProfile/CareerGrowthTab',
        element:(
          <ProtectedRoute roles={['Admin','Working_Pro']}>
         <CareerGrowthTab/>
          </ProtectedRoute>
        )
      },
      {
        path:'/workingProfenalProfile/UpskillingTab',
        element:(
          <ProtectedRoute roles={['Admin','Working_Pro']}>
         <UpskillingTab/>
          </ProtectedRoute>
        )
      },
      {
        path:'/workingProfenalProfile/CareerSwitchTab',
        element:(
          <ProtectedRoute roles={['Admin','Working_Pro']}>
         <CareerSwitchTab/>
          </ProtectedRoute>
        )
      },
      {
        path: '/aiPeer',
        element: (
          <ProtectedRoute roles={['Admin', 'Student']}>
          <AiPeer/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/aiProf',
        element: (
          <ProtectedRoute roles={['Admin', 'Student']}>
          <AiProf/>
          </ProtectedRoute>
        ),
      }
      ,
      {
        path: '/aiMentor',
        element: (
          <ProtectedRoute roles={['Admin', 'Working_Pro']}>
          <AiMentor/>
          </ProtectedRoute>
        ),
      },{
        path: '/setGoal',
        element: (
          <ProtectedRoute roles={['Admin', 'Student', 'Working_Pro']}>
          <RoadMap/>
          </ProtectedRoute>
        ),
      },{
        path: '/knowledgeAssessment',
        element: (
          <ProtectedRoute roles={['Admin',  'Working_Pro','Student']}>
          <KAQuiz/>
          </ProtectedRoute>
        ),
      },{
        path: '/evaluation',
        element: (
          <ProtectedRoute roles={['Admin',  'Working_Pro','Student']}>
      <EvaluationPage/>
          </ProtectedRoute>
        ),
      },
      {
        path: '/evaluation',
        element: (
          <ProtectedRoute roles={['Admin',  'Working_Pro','Student']}>
      <EvaluationPage/>
          </ProtectedRoute>
        ),
      }
    ],
  },
]);

export default router;
