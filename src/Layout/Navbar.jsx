import React from "react";
import {
  Grid,
  Box,
  Heading,
  List,
  Button,
  IconButton,
  useDisclosure,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  DrawerOverlay,
  Drawer,
  DrawerCloseButton,
} from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Grid
        style={{ textAlign: "center", zIndex: 999 }}
        templateColumns="repeat(12, 1fr)"
      >
        <Box gridColumn="1/4">
          <Heading fontSize="1.2em" alignItems="center" pl={2} color="primary">
            Wenovate
          </Heading>
        </Box>
        <Box gridColumn="4/8">
          <List display={{ sm: "none", md: "grid" }}>
            <Grid templateColumns="repeat(3, 1fr)">
              <NavLink
                className={style.navBarLink}
                activeClassName={style.navBarActive}
                to="/"
              >
                Blog
              </NavLink>
              <NavLink
                className={style.navBarLink}
                activeClassName={style.navBarActive}
                to="/1"
              >
                Connect
              </NavLink>
              <NavLink
                className={style.navBarLink}
                activeClassName={style.navBarActive}
                to="/2"
              >
                Market
              </NavLink>
            </Grid>
          </List>
        </Box>
        <Box
          gridColumn={{ md: "10/11", lg: "9/10" }}
          ml={{ md: 20 }}
          display={{ sm: "none", md: "grid" }}
        >
          <Button
            mt={4}
            justifySelf="end"
            variantColor="accent"
            color="primary"
            className={style.signInBtn}
          >
            Sign in
          </Button>
        </Box>
        <Box gridColumn="12/13" display={{ md: "none" }}>
          <IconButton
            onClick={onOpen}
            _focus={{ boxShadow: "transparent" }}
            justifySelf="end"
            mt={2}
            size="lg"
            variantColor="white"
            color="primary"
            icon="menuIcon"
            className={style.moreBtn}
          />
        </Box>
        <Box
          gridColumn={{ md: "11/12", lg: "10/11" }}
          ml={{ md: 20 }}
          display={{ sm: "none", md: "grid" }}
        >
          <Button
            mt={4}
            justifySelf="end"
            variantColor="primary"
            color="white"
            className={style.regBtn}
          >
            Register
          </Button>
        </Box>
      </Grid>
      {/* drawer for mobile */}
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton 
          _focus={{ boxShadow: "transparent" }}
          justifySelf="end"
          mt={2}
          size="lg"
          variantColor="white"
          color="primary"
          className={style.moreBtn}
          />
          <DrawerHeader pl="40px" color="primary" fontFamily="Nunito SemiBold" borderBottomWidth="1px">Hello mf</DrawerHeader>
          <DrawerBody>
          <Box>
          <List pl={0} pr="50px">
            <Grid>
              <NavLink
                className={style.navBarLink}
                activeClassName={style.navBarActive}
                to="/"
              >
                Blog
              </NavLink>
              <NavLink
                className={style.navBarLink}
                activeClassName={style.navBarActive}
                to="/1"
              >
                Connect
              </NavLink>
              <NavLink
                className={style.navBarLink}
                activeClassName={style.navBarActive}
                to="/2"
              >
                Market
              </NavLink>
            </Grid>
          </List>
        </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
