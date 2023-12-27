import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      no copyright; {new Date().getFullYear()} iljo.dev - cheese enjoyer
    </Box>
  )
}

export default Footer
