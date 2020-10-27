import { createMuiTheme } from '@material-ui/core';
import { themeColors } from './theme-colors';

let theme = createMuiTheme({
  typography: {
    fontFamily: 'sans-serif',
  },
  overrides: {
    MuiTypography: {
      root: {
        color: themeColors.navy.main,
      },
    },
    MuiIconButton: {
      root: {
        color: themeColors.navy.main,
      },
    },
    MuiTooltip: {
      tooltip: {
        fontFamily: 'sans-serif',
        fontSize: '0.75rem',
      },
    },
    MuiInputAdornment: {
      positionStart: {
        marginLeft: '-6px',
      },
    },
    MuiOutlinedInput: {
      inputMarginDense: {
        paddingTop: '5.5px',
        paddingBottom: '5.5px',
      },
    },
  },
});

export default theme;
