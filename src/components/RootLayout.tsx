import { Box, styled } from '@mui/material'

import { palette } from '../themes/AtriumTheme'

export const RootLayout = styled(Box)(({ theme }) => ({
  '& .MuiAppBar-root': {
    background: palette.common.black,
    backgroundImage: 'none',
    boxShadow: 'none',
  },
  '& > div:not(.header)': {
    [theme.breakpoints.up('xl')]: {
      padding: '0px',
    },
    [theme.breakpoints.down('xl')]: {
      padding: '0px 20px',
    },
  },
  '&.bg-animation .grid-bg': {
    '&::before': {
      left: `0%`,
      width: `100%`,
    },
    position: 'relative',
  },
  '&.scroll-up .MuiAppBar-root': {
    backdropFilter: 'blur(15px)',
    background: 'rgba(26, 26, 26, 0.3)',
    // background: 'red',
  },
  scrollSnapType: 'y mandatory',
}))
