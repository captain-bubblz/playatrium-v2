import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'

import { SectionContainer, GridBgContainer } from '../components'
// import useInterval from './hooks/useInterval'
import {
  HeroSection,
  IntegrationsSection,
  UpdatesSection,
  OverviewSection,
  ProfilesSection,
  BuildersSection,
  JoinSection,
} from '../sections'
import AtriumTheme from '../themes/AtriumTheme'

// const sticky = 500

export const Home = () => {
  const [animClass, setAnimClass] = useState('')
  // const [scrollUp, setScrollUp] = useState(false)
  // const [y, setY] = useState(window.scrollY)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // document.body.style.paddingRight = '10px'
    setAnimClass('bg-animation')

    setTimeout(() => {
      document.body.style.overflow = 'visible'
      // document.body.style.paddingRight = '0px'
      // setEnable(true)
    }, 4200)

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  // const handleNavigation = useCallback(() => {
  //   // const window = e.currentTarget
  //   if (y > window.scrollY) {
  //     // console.log("scrolling up");
  //     setScrollUp(true)
  //   } else if (y < window.scrollY) {
  //     // console.log("scrolling down");
  //     setScrollUp(false)
  //   }
  //   setY(window.scrollY)
  // }, [y])

  // useEffect(() => {
  //   setY(window.scrollY)
  //   window.addEventListener('scroll', handleNavigation)

  //   return () => {
  //     window.removeEventListener('scroll', handleNavigation)
  //   }
  // }, [handleNavigation])

  return (
    <Box
      className={animClass}
      sx={{
        '&.bg-animation .grid-bg': {
          '&::before': {
            left: `0%`,
            width: `100%`,
          },
          position: 'relative',
        },
        scrollSnapType: 'y mandatory',
      }}
    >
      <SectionContainer className="header" height="100vh !important">
        <Box height="100%" display="flex" flexDirection="column">
          <Box sx={{ height: '100%', width: '100%' }}>
            <GridBgContainer top>
              <HeroSection playAnimation={animClass === 'bg-animation'} />
            </GridBgContainer>
          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer className="update light">
        <UpdatesSection />
      </SectionContainer>
      <SectionContainer
        sx={{
          scrollSnapAlign: 'center',
        }}
      >
        <GridBgContainer>
          <OverviewSection />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer className="light">
        <GridBgContainer>
          <ProfilesSection />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer>
        <GridBgContainer>
          <IntegrationsSection />
        </GridBgContainer>
      </SectionContainer>
      <SectionContainer minHeight="100vh !important" height="100% !important">
        <GridBgContainer
          sx={{
            height: '100% !important',
            minHeight: '100vh !important',
          }}
        >
          <BuildersSection />
        </GridBgContainer>
      </SectionContainer>
      <Box
        px={{ lg: 5, xl: 0 }}
        sx={{
          background: AtriumTheme.palette.info.main,
        }}
      >
        <GridBgContainer>
          <JoinSection />
        </GridBgContainer>
      </Box>
    </Box>
  )
}