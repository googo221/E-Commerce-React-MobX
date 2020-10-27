import React, { useState } from 'react';

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styled from '@material-ui/core/styles/styled';

const ToggleButton = styled(Button)({
  textTransform: 'none',
  marginLeft: '1.5rem',
  paddingLeft: '1.5rem',
  paddingRight: '1.5rem',
});

const ListItemContainer = styled('div')({
  width: '15rem',
});

const ItemText = styled(ListItemText)({
  textAlign: 'center',
});

const SideDrawer = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDrawer = () => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setToggle(!toggle);
  };

  const list = () => (
    <ListItemContainer onClick={toggleDrawer()} onKeyDown={toggleDrawer()}>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </ListItemContainer>
  );

  return (
    <div>
      <React.Fragment>
        <ToggleButton size="small" variant="outlined" onClick={toggleDrawer()}>
          More Filters +
        </ToggleButton>
        <Drawer open={toggle} onClose={toggleDrawer()}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideDrawer;
