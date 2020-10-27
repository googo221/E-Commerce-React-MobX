import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from '@material-ui/core/styles/styled';
import { Drawer, IconButton, Paper } from '@material-ui/core';
import WbAutoIcon from '@material-ui/icons/WbAuto';
import Tooltip from '@material-ui/core/Tooltip';

import { RoutesListing } from '../routes/routes-listing';
import { themeColors } from '../theme/theme-colors';

const DrawerContainer = styled(Paper)({
  height: '100vh',
  width: '3.75rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const IconLink = styled(NavLink)({
  '&.active': {
    '& button': {
      backgroundColor: themeColors.green.pale,
      '& svg': {
        color: themeColors.green.main,
      },
    },
  },
});

const Logo = styled(WbAutoIcon)({
  position: 'absolute',
  top: '1rem',
});

const SideBar = () => {
  return (
    <Drawer
      variant="permanent"
      open
      PaperProps={{
        component: DrawerContainer,
      }}
    >
      <Logo />
      {RoutesListing.map(
        (route) =>
          route.icon && (
            <Tooltip
              key={route.path}
              placement="right"
              title={route.tooltipTitle}
            >
              <IconLink to={route.path}>
                <IconButton>{route.icon}</IconButton>
              </IconLink>
            </Tooltip>
          )
      )}
    </Drawer>
  );
};

export default SideBar;
