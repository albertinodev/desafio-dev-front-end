import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import { useRouter } from 'next/router';
import { Settings } from '@material-ui/icons';
import React, { useState, useContext, useEffect } from "react";
import { makeStyles, Drawer, List, Typography, ListItem, ListItemIcon, ListItemText, Box, AppBar, Toolbar, Grid } from '@material-ui/core';

import { AuthContext } from '../contexts/AuthContext';

import { cssProperties } from "../css/super-admin"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties


const SuperAdminDrawerLeft = ({ children }) => {
    const classes = useStyles();
    const router = useRouter();
    const { user } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const [theUser, setTheUSer] = useState({
        company: { name: "", photo: "" },
        email: "",
        firstName: "",
        lastName: "",
        username: ""
    })

    const selectedButton = { backgroundColor: "#f7d77f" };
    const unSelectedButton = { color: "#606060", backgroundColor: "#f7f7f7" };
    const selectedText = { color: "black", fontWeight: 900 };
    const unSelectedText = { color: "#606060", fontWeight: 500 };

    useEffect(() => {
        if (user !== null && typeof (user) !== "undefined") {
            setTheUSer(user);
        } else {
            console.log("User data not found");
        }
    }, [user])


    const handleLogout = () => {
        window ? window.location.href = "/logout" : Router.push('/logout');
    }

    const handleBgChange = (position) => {
        clearBGChange() // fisrt clear the properties

        const buttons = document.getElementsByClassName(classes.roundBTN);
        buttons[position].style.backgroundColor = "#f7d77f";

        const texts = document.getElementsByClassName(classes.boldText);
        texts[position].style.color = "black";
        texts[position].style.fontWeight = 900;
    }


    //Clear all properties from elemnts
    const clearBGChange = () => {
        const texts = document.getElementsByClassName(classes.boldText);
        const buttons = document.getElementsByClassName(classes.roundBTN);

        for (let i = 0; i < texts.length; i++) {
            const element = texts[i];
            element.style.color = "#606060";
            element.style.fontWeight = 500;
        }

        for (let i = 0; i < buttons.length; i++) {
            const element = buttons[i];
            element.style.color = "#606060";
            element.style.backgroundColor = "#f7f7f7";
        }
    }


    const handleShow = () => {
        const drop = document.getElementById("block-session");
        if (show) {
            drop.style.display = "block";
        } else {
            drop.style.display = "none";
        }
        setShow(!show);
    }


    const mouseEnter = (pathBase, position) => {
        const path = router.asPath;
        if (path.includes(pathBase) === false) {
          const buttons = document.getElementsByClassName(classes.roundBTN);
          if (buttons && buttons.length > 0) {
            buttons[position].style.backgroundColor = "#f7d77f" 
          }
      
          const texts = document.getElementsByClassName(classes.boldText);
          if (texts && texts.length > 0) {
            texts[position].style.color = "black";
            texts[position].style.fontWeight = 900;
          }
        }
    }


    const mouseOut = (pathBase, position) => {
        const path = router.asPath;
        if (path.includes(pathBase) === false) {
          const buttons = document.getElementsByClassName(classes.roundBTN);
          if (buttons && buttons.length > 0) {
            buttons[position].style.color = "#606060";
            buttons[position].style.backgroundColor = "#f7f7f7" 
          }
      
          const texts = document.getElementsByClassName(classes.boldText);
          if (texts && texts.length > 0) {
            texts[position].style.color = "#606060";
            texts[position].style.fontWeight = 500;
          }
        }
      }
    

    return (
        <div className={classes.root}>
            <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left">
                <List>
                    <Box className={classes.logo}>
                        <Image src="/icons/Logo-large.svg" width={100} height={100} />
                    </Box>
                    <Link href="/super-admin/companies">
                        <ListItem disableRipple={true} button key="li1" className={classes.roundBTN} 
                            onClick={() => { handleBgChange(0) }}
                            onMouseEnter={() => { mouseEnter("/companies", 0) }}  
                            onMouseOver={() => { mouseEnter("/companies", 0) }} 
                            onMouseOut={() => { mouseOut("/companies", 0) }} 
                            style={ router.asPath.includes("/companies") ? selectedButton : unSelectedButton }
                            >
                            <ListItemIcon className={classes.icon}>
                                <Image src="/icons/business-and-trade.png" width={18} height={18} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <a className={classes.anchorLateralMenu}>
                                    <Typography className={classes.boldText}
                                    style={ router.asPath.includes("/companies") ? selectedText : unSelectedText }
                                    >Empresas</Typography>
                                </a>
                            } />
                        </ListItem>
                    </Link>        

                    <Link href="/super-admin/administrators">
                        <ListItem disableRipple={true} button key="li2" className={classes.roundBTN} 
                            onClick={() => { handleBgChange(1) }}
                            onMouseEnter={() => { mouseEnter("/administrators", 1) }}  
                            onMouseOver={() => { mouseEnter("/administrators", 1) }} 
                            onMouseOut={() => { mouseOut("/administrators", 1) }} 
                            style={ router.asPath.includes("/administrators") ? selectedButton : unSelectedButton }
                            >
                            <ListItemIcon className={classes.icon}>
                                <Image src="/icons/business-grey.png" width={18} height={18} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <a className={classes.anchorLateralMenu}>
                                    <Typography className={classes.boldText}
                                    style={ router.asPath.includes("/administrators") ? selectedText : unSelectedText }
                                    >Administradores</Typography>
                                </a>
                            } />
                        </ListItem>
                    </Link>

                    <Link href="/super-admin/configurations">
                        <ListItem disableRipple={true} button key="li3" className={classes.roundBTN} 
                            onClick={() => { handleBgChange(2) }}
                            onMouseEnter={() => { mouseEnter("/configurations", 2) }}  
                            onMouseOver={() => { mouseEnter("/configurations", 2) }} 
                            onMouseOut={() => { mouseOut("/configurations", 2) }} 
                            style={ router.asPath.includes("/configurations") ? selectedButton : unSelectedButton }
                            >
                            <ListItemIcon className={classes.icon}>
                                <Settings width={18} height={18} />
                            </ListItemIcon>
                            <ListItemText primary={
                                <a className={classes.anchorLateralMenu}>
                                    <Typography className={classes.boldText}
                                    style={ router.asPath.includes("/configurations") ? selectedText : unSelectedText }
                                    >Configurações</Typography>
                                </a>
                            } />
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <main className={classes.content}>
                <AppBar position="static" elevation={0} className={classes.topBarUser}>
                    <Toolbar>
                        <Grid container justifyContent="flex-end">
                            <Box style={{ marginTop: 2 }}>
                                <Image src={theUser.avatar ? theUser.avatar : '/icons/business.png'} height={34} width={34} />
                            </Box>
                            <span className={classes.userName} onClick={handleShow} style={{ cursor: "pointer" }}>{theUser.firstName + " " + theUser.lastName}</span>
                            <Box className={classes.downArrow} onClick={handleShow} style={{ cursor: "pointer" }}>
                                <Image src={'/icons/seta.svg'} height={15} width={15} />
                            </Box>
                            {
                                <div hidden={show} className={classes.dropDown} id="block-session">
                                    <Box style={{ cursor: "pointer" }} onClick={() => {
                                        handleShow()
                                        handleLogout();
                                    }}>
                                        <p style={{ textAlign: "center" }}>
                                            Terminar Sessão
                                </p>
                                    </Box>
                                </div>
                            }
                        </Grid>
                    </Toolbar>
                </AppBar>
                {children}
            </main>
        </div>
    );
}



export default SuperAdminDrawerLeft;