import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'


const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Iljo De Poorter
        </Text>

    </Link>)
  );
}

export default Logo
