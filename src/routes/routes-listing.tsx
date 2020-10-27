import React from 'react';

import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import ImportContactsRoundedIcon from '@material-ui/icons/ImportContactsRounded';
import ViewQuiltRoundedIcon from '@material-ui/icons/ViewQuiltRounded';

import Routes from './routes';
import Candidates from '../components/Candidates/candidates';

export const RoutesListing = [
  {
    path: Routes.DEFAULT,
  },
  {
    path: Routes.PEOPLE,
    icon: <PeopleAltIcon />,
    tooltipTitle: 'People Listing',
    component: Candidates,
  },
  {
    path: Routes.DASHBOARD,
    icon: <DashboardRoundedIcon />,
    tooltipTitle: 'Dashboard',
  },
  {
    path: Routes.FORM,
    icon: <ImportContactsRoundedIcon />,
    tooltipTitle: 'Form',
  },
  {
    path: Routes.BOARD,
    icon: <ViewQuiltRoundedIcon />,
    tooltipTitle: 'Board',
  },
];
