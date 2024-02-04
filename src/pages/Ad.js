

import SimpleBar from 'simplebar-react'
// import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../components/helpers'
// import Main from '../components/Main'

// import Header from '../components/Header'

import AdContent from '../components/Content/AdContent'

export default function Ad() {
  return (
    <SimpleBar style={
      { maxHeight: '100vh',
        backgroundColor:"#022039"
      }
     }>
      <ChakraProvider theme={theme}>
        {/* <Header/> */}
        <>
          <AdContent />
        </>
      </ChakraProvider>
    </SimpleBar>
  )
}
