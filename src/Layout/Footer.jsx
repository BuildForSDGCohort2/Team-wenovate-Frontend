import React from 'react'
import { Grid, ListItem, Box, List } from '@chakra-ui/core'

const Footer = () => {
    return (
        <Grid templateColumns="repeat(12, 1fr)" backgroundColor="primary" color="white" mt={{md:"350px", lg:"100px"}}>
            <Box gridColumn={{sm:"2/12", md:"1/4"}} p={20}>
                <List>
                    <ListItem>
                        Products
                    </ListItem>
                    <ListItem>
                        Communities
                    </ListItem>
                    <ListItem>
                        People
                    </ListItem>
                    <ListItem>
                        Testimonies
                    </ListItem>
                </List>
            </Box>
        </Grid>
    )
}

export default Footer
