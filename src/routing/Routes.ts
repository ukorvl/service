import { lazy } from 'react';
import { RouteModel } from './RouteModel';
import { Path } from './Path';

const MainView = lazy(() => import('../views/MainView'));
const AboutView = lazy(() => import('../views/AboutView'));
const MediaView = lazy(() => import('../views/MediaView'));
const ExpertiseView = lazy(() => import('../views/ExpertiseView'));
const AccountView = lazy(() => import('../views/AccountView'));
const WeeklyReviewView = lazy(() => import('../views/WeeklyReviewView'));
const MakeAppointmentView = lazy(() => import('../views/MakeAppointmentView'));
const View404 = lazy(() => import('../views/404'));

/**
 * App routes.
 */
export const routes: RouteModel[] = [
  {
    path: Path.root,
    Component: MainView,
  },
  {
    path: Path.about,
    Component: AboutView,
  },
  {
    path: Path.media,
    Component: MediaView,
  },
  {
    path: Path.expertise,
    Component: ExpertiseView,
  },
  {
    path: Path.account,
    Component: AccountView,
  },
  {
    path: Path.weeklyReview,
    Component: WeeklyReviewView,
  },
  {
    path: Path.appointment,
    Component: MakeAppointmentView,
  },
  {
    path: Path.any,
    Component: View404,
  },
];
