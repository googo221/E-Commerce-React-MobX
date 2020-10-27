import React from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import styled from '@material-ui/core/styles/styled';

const FiltersBox = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  marginBottom: '2rem',
});

const Icon = styled(SearchIcon)({
  fontSize: '1rem',
});

const FiltersContainer = () => {
  return (
    <FiltersBox>
      <TextField
        color="primary"
        label="Search..."
        variant="outlined"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          ),
        }}
      />
    </FiltersBox>
  );
};

export default FiltersContainer;
