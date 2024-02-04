// import React from 'react'
// import Main from '../components/container';
// import Gallery from '../components/Gallery';

// const About = () => {
//   return (
//     <>
//     <Gallery />
//     <Main />
//     </>
//   )
// }

// export default About

import SimpleBar from 'simplebar-react'
// import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../components/helpers'
// import Main from '../components/Main'
import Content from '../components/Content/DriverContent'
// import Header from '../components/Header'

export default function DriverProfile() {
  return (
    <SimpleBar style={
      { maxHeight: '100vh',
        backgroundColor:"#022039"
      }
     }>
      <ChakraProvider theme={theme}>
        {/* <Header/> */}
        <>
        <Content />
        </>
      </ChakraProvider>
    </SimpleBar>
  )
}
