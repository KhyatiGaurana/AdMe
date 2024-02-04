import { Container } from '@chakra-ui/layout'
import Content from './Content/Content'

export default function Main() {
  return (
    <Container display={{ base: 'block', md: 'flex' }} maxW="container.xl">
      <Content />
    </Container>
  )
}
