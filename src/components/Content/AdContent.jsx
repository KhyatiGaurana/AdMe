import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

import SimpleReactFileUpload from './upload'
// import CompanySettings from './CompanySettings'
import Notifications from './Notifications'

const AdContent = () => {
  const tabs = ['Account Settings']

  return (
    <Box
      as="main"
      flex={3}
      d="flex"
      flexDir="column"
      justifyContent="space-between"
      pt={5}
      margin={'10rem'}
      rounded="md"
      borderWidth={1}
      borderColor="gray.600"
      bg="brand.blue"
      style={{ transform: 'translateY(-100px)' }}
    >
      <Tabs>
        <TabList px={5}>
          {tabs.map(tab => (
            <Tab
              key={tab}
              mx={3}
              px={0}
              py={3}
              fontWeight="semibold"
              color="brand.white"
              borderBottomWidth={1}
              padding={'1rem'}
              _active={{ bg: 'transparent' }}
              _selected={{ color: 'brand.dark_blue', borderColor: 'brand.dark_blue' }}
            >
              {tab}
            </Tab>
          ))}
        </TabList>

        <TabPanels px={3} mt={5}>
          <TabPanel>
            <SimpleReactFileUpload/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default AdContent
