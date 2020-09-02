import React from 'react'
import { Box, Text, Grid } from '@chakra-ui/core'

const LandingPage = () => {
    return (
    <Grid templateColumns="repeat(12, 1fr)" >
        <Box gridRow={1} gridColumn={{sm:"1/12", md:"1/8", lg:"2/8"}} ml={{md:"30px", lg:0}}>
          <Text pl={2} fontSize={{sm:"1.8rem", md:"2.4rem", lg:"3.6rem" }} fontFamily="Nunito ExtraBold" color="primary" mb={10} mt={3} >
              <Text d="inline" fontFamily="Nunito SemiBold" fontSize={{sm:"1.2rem", md:"1.2rem", lg:"1.6rem"}} >connect, make sales and learn</Text><br/>
              on the <Text d="inline" color="accent" fontFamily="Nunito ExtraBold">best </Text>online<br/>
              community for <Text d="inline" color="accent" fontFamily="Nunito ExtraBold">Farmers</Text>
            </Text> 
        </Box>
        <Box gridRow={2} gridColumn={{sm:"1/9", md:"1/8", lg:"2/8"}} ml={{md:"30px", lg:0}}>
          <Text mt={0} lineHeight={1.2} d="block" pl={2} color="primary" fontFamily="Nunito ExtraBold" fontSize={{sm:"1.6rem", md:"2rem", lg:"2.5rem" }}>
              Access to quality<br/>
              information<br/>
              <Text mt={0} lineHeight={1.4} d="block" fontFamily="Nunito Bold" color="baseGrey" fontSize={{sm:"1.2rem", md:"1.3rem", lg:"1.8rem" }}>
                about farming best<br/>
                practices to boost your<br/>
                farm production
              </Text>
          </Text>
          <Box gridRow={{sm:3, md:2}}>
             {/* Image goes here */}
          </Box>
        </Box>
        <Box gridRow={{sm:4, md:3}} gridColumn={{sm:"1/12", md:"1/8", lg:"2/8"}} ml={{md:"30px", lg:0}}>
             {/* Another sexy image goes here */}
        </Box>
        <Box gridRow={{sm:5, md:3}} gridColumn={{sm:"5/13", md:"8/12", lg:"8/12"}}>
        <Text mt={{md:0}} lineHeight={1.2} d="block" pl={2} color="primary" fontFamily="Nunito ExtraBold" fontSize={{sm:"1.6rem", md:"2rem", lg:"2.5rem" }}>
              A great platform<br/>
              to make sales<br/>
              <Text mt={0} lineHeight={1.4} d="block" fontFamily="Nunito Bold" color="baseGrey" fontSize={{sm:"1.2rem", md:"1.3rem", lg:"1.8rem" }}>
                and make valuable<br/>
                connections with other<br/>
                farmers and investors
              </Text>
          </Text>
        </Box>
    </Grid>
       
    )
}

export default LandingPage
