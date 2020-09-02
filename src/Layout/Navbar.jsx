import React from 'react'
import { Grid, Box, Heading, List, Button} from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'
import  style  from "./Navbar.module.css";



const Navbar = () => {
    return (
        <Grid
        style={{textAlign:"center", zIndex: 999}}
        templateColumns="repeat(12, 1fr)">
        <Box gridColumn="1/4">
            <Heading fontSize="1.2em" pl={2} color="primary">Wenovate</Heading>
        </Box>    
        <Box gridColumn="4/8">
            <List display={{sm: "none", md: "grid"}}>
             <Grid templateColumns="repeat(3, 1fr)">
                  <NavLink className={style.navBarLink} activeClassName={style.navBarActive} to="/">Blog</NavLink> 
                  <NavLink className={style.navBarLink} activeClassName={style.navBarActive} to="/1">Connect</NavLink> 
                  <NavLink className={style.navBarLink} activeClassName={style.navBarActive} to="/2">Market</NavLink> 
            </Grid>
            </List>
        </Box>
        <Box gridColumn={{sm: "11/12", md: "10/11", lg: "9/10"}} ml={{md: 20}} display="grid">
          <Button mt={4} justifySelf="end" variantColor="accent" color="primary" className={style.signInBtn}>Sign in</Button>
        </Box>
        <Box gridColumn={{md: "11/12",lg: "10/11"}} ml={{md: 20}} display={{sm: "none", md:"grid"}}>
          <Button mt={4} justifySelf="end" variantColor="primary" color="white" className={style.regBtn}>Register</Button>
        </Box>
        </Grid>
    )
}

export default Navbar
