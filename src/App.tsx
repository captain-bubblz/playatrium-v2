import { Box, styled, ThemeProvider } from '@mui/material'
import React from 'react'

import './index.css'
import './App.css'
import './fonts/andale/style.css'
import './fonts/fractul/stylesheet.css'

import { Header, Footer } from './components'
import {
  HeroSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
  JoinSection,
} from './sections'
import AtriumTheme, { palette } from './themes/AtriumTheme'

const Wrapper = styled(Box)(() => ({
  // height: window.innerHeight || window.document.documentElement.clientHeight,
  height: '100vh',
  // width: '100%',
  // padding: '20px',
}))
const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={AtriumTheme}>
        <Box sx={{ background: AtriumTheme.palette.common.black }}>
          <Box
            sx={{
              '& > div:not(.header), .grid-bg': {
                '&::before': {
                  backgroundImage: `linear-gradient(to right, #A8A8A8 1px, transparent 1px)`,
                  backgroundRepeat: 'repeat-x, no-repeat',

                  backgroundSize: `${100 / 12}% 100%, cover`,

                  content: '""',

                  height: '100%',

                  left: '0px',
                  // background: 'red',
                  position: 'absolute',
                  width: '100%',
                },
                position: 'relative',
              },
            }}
          >
            <Wrapper className="header">
              <Box height="100%" display="flex" flexDirection="column">
                <Header />
                <HeroSection />
              </Box>
            </Wrapper>
            <Wrapper
              sx={{ background: AtriumTheme.palette.background.default }}
            >
              <UpdatesSection />
            </Wrapper>
            <Wrapper>
              <OverviewSection />
            </Wrapper>
            <Wrapper
              sx={{ background: AtriumTheme.palette.background.default }}
            >
              <ProfilesSection />
            </Wrapper>
            <JoinSection />
            <Footer />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  )
}

export default App
