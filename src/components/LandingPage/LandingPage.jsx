import React from 'react'
import { Box, Text, Grid } from '@chakra-ui/core'

const LandingPage = () => {
    return (
    <Grid templateColumns="repeat(12, 1fr)" >
        <Box gridColumn={{sm:"1/12", md:"1/6", lg:"2/8"}}>
          <Text pl={2} fontSize={{sm:"1.6rem", md:"2rem", lg:"3.6rem" }} fontFamily="Nunito ExtraBold" color="primary" mt={3} ml={{md:"30px", lg:0}}>
              <Text d="inline" fontFamily="Nunito SemiBold" fontSize={{sm:"1rem", md:"1.2rem", lg:"1.6rem"}} >connect, make sales and learn</Text><br/>
              on the <Text d="inline" color="accent" fontFamily="Nunito ExtraBold">best </Text>online<br/>
              community for <Text d="inline" color="accent" fontFamily="Nunito ExtraBold">Farmers</Text>
            </Text> 
        </Box>
    </Grid>
       
    )
}

export default LandingPage
