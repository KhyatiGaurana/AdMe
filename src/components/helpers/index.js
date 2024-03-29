import { extendTheme } from '@chakra-ui/react'
import { red } from '@mui/material/colors'

export const theme = extendTheme({
  colors: {
    brand: {
      blue: '#63c8de',
      dark_blue:'#022039',
      cadet: '#8998a8',
      dark: '#243156',
      gray: '#a0acb9',
      green: '#36c537',
      light: '#E2E8F0',
      pure: '#fafafb',
      slate: '#77889a',
      white: '#E2E8F0',
      yellow: '#ed9b13',
    },
  },
  components: {
    Button: {
      variants: {
        solid: {
          p: '6',
          color: 'white',
          bg: 'brand.dark_blue',
          _hover: { bg: 'brand.white', color:'brand.dark_blue'},
          _active: { bg: 'brand.blue' },
          _focus: { boxShadow: 'none' },
        },
        outline: {
          bg: 'transparent',
          borderWidth: '1px',
          color: 'brand.cadet',
          borderColor: 'brand.light',
          _hover: { bg: 'brand.white' },
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
        ghost: {
          color: 'white',
          bg: 'rgba(0, 0, 0, 0.25)',
          _hover: { bg: 'rgba(0, 0, 0, 0.25)' },
          _active: { bg: 'rgba(0, 0, 0, 0.35)' },
          _focus: { boxShadow: 'none' },
        },
        link: {
          p: '0',
          height: 'full',
          bg: 'transparent',
          color: 'gray.500',
          rounded: 'none',
          _active: { bg: 'brand.light' },
          _focus: { boxShadow: 'none' },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: 'none',
          },
          color:'brand.gray'
        },
      },
    },
    
  },
})
