import clsx from 'clsx';
import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import {useRouter} from 'next/router';

import { parseCookies } from 'nookies'
import { AuthContext } from '../contexts/AuthContext';
import React, { useState, useContext, useEffect} from "react";

import { ExpandLess, ExpandMore } from '@material-ui/icons';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { makeStyles, Drawer, CircularProgress, List, Typography, Button, ListItem, 
  ListItemIcon, ListItemText, Collapse, Box, Avatar, Popover } from '@material-ui/core';

import { cssProperties } from "../css/dashboard"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

const PermanentDrawerLeft = ({ children }) => {
  const router = useRouter();
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const { user } = useContext(AuthContext);
  const [theUser, setTheUSer] = useState(null);

  const selectedButton = { backgroundColor: "#f7d77f" };
  const unSelectedButton = { color: "#606060", backgroundColor: "#f7f7f7" };
  const selectedText = { color: "black", fontWeight: 900 };
  const unSelectedText = { color: "#606060", fontWeight: 500 };

  useEffect(async () => {
    if (user) {
      setTheUSer(user);

      if (user.isManager === true) {
        autoButtonSelect();    
      }   

      if (user.isManager === true) {
        handleBgChange(0);
      }
    }  
  }, [user])


  const autoButtonSelect = () => {
    const path = router.asPath;

    if (path.includes("/")) {
      handleBgChange(0)
    }

    //Manager verification
    if (path.includes("/local-details")) {
      handleBgChange(0);
    }

    //SubItem
    if (path.includes("/settings")) {
      handleSubItemBg(0)
    }

    if (path.includes("/statistics")) {
      handleSubItemBg(1)
    }

    if (path.includes("/activity")) {
      handleSubItemBg(2)
    }

    // if (path.includes("/promotions")) {
    //   handleBgChange(2)
    // }

    if (path.includes("/clients")) {
      handleBgChange(2)
    }

    if (path.includes("/points-of-sale")) {
      handleBgChange(3)
    }

    if (path.includes("/client-details")) {
      handleBgChange(2)
    }

    if (path.includes("/local-details")) {
      handleBgChange(3)
    }
  }


  const handleBgChange = (position) => {
    clearBGChange() // first clear the properties

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


  const handleSubItemBg = (position) => {
    clearBGChange() // first clear the properties

    const subMenuItens = document.getElementsByClassName(classes.subItemMenu);
    if (subMenuItens && subMenuItens.length > 0) {
      for (let i = 0; i < subMenuItens.length; i++) {
        let element = subMenuItens[i];
        element.style.fontWeight = 500;
        element.style.backgroundColor = "#f7f7f7";
      }

      subMenuItens[position].style.backgroundColor = "#f7d77f";
    }
    //
    const subMenuTexts = document.getElementsByClassName(classes.subBoldText);
    if (subMenuTexts && subMenuTexts.length > 0) {
      subMenuTexts[position].style.color = "black";
      subMenuTexts[position].style.fontWeight = 900;
    }
  }

  //Clear all properties from elemnts
  const clearBGChange = () => {
    // Do all of these checks if the logged user is not Manager
      const texts = document.getElementsByClassName(classes.boldText);
      const subTexts = document.getElementsByClassName(classes.subBoldText);
      const buttons = document.getElementsByClassName(classes.roundBTN);
      const subButtons = document.getElementsByClassName(classes.subItemMenu);
      const textsSubs = document.getElementsByClassName(classes.subItemMenu);

      if (subTexts && subTexts.length > 0) {
        for (let i = 0; i < subTexts.length; i++) {
          const element = subTexts[i];
          element.style.color = "#606060";
          element.style.fontWeight = 500;
        }
      }

      if (texts && texts.length > 0) {
        for (let i = 0; i < texts.length; i++) {
          const element = texts[i];
          element.style.color = "#606060";
          element.style.fontWeight = 500;
        }
      } 

      if (buttons && buttons.length > 0) {
        for (let i = 0; i < buttons.length; i++) {
          const element = buttons[i];
          element.style.color = "#606060";
          element.style.backgroundColor = "#f7f7f7";
        }
      }

      if (subButtons && subButtons.length > 0) {
        for (let i = 0; i < subButtons.length; i++) {
          const element = subButtons[i];
          element.style.color = "#606060";
          element.style.backgroundColor = "#f7f7f7";
        }
      }

      if (textsSubs && textsSubs.length > 0) {
        for (let i = 0; i < textsSubs.length; i++) {
          const element = textsSubs[i];
          element.style.color = "#606060";
          element.style.fontWeight = 500;
        }
      }
  }


  const handleClick = () => {
    setOpen(!open);
  };


  const handleLogout = () => {
    window ? window.location.href = "/logout" : Router.push('/logout');
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

    if (pathBase === "/" && path !== "/") {
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

    if (pathBase === "/" && path !== "/") {
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


  const mouseEnterSub = (pathBase, position) => {
    const path = router.asPath;
    if (path.includes(pathBase) === false) {
      const buttons = document.getElementsByClassName(classes.subItemMenu);
      if (buttons && buttons.length > 0) {
        buttons[position].style.backgroundColor = "#f7d77f" 
      }
  
      const texts = document.getElementsByClassName(classes.subBoldText);
      if (texts && texts.length > 0) {
        texts[position].style.color = "black";
        texts[position].style.fontWeight = 900;
      }
    }

    if (pathBase === "/" && path !== "/") {
      const buttons = document.getElementsByClassName(classes.subItemMenu);
      if (buttons && buttons.length > 0) {
        buttons[position].style.backgroundColor = "#f7d77f" 
      }
  
      const texts = document.getElementsByClassName(classes.subBoldText);
      if (texts && texts.length > 0) {
        texts[position].style.color = "black";
        texts[position].style.fontWeight = 900;
      }
    }
  }


  const mouseOutSub = (pathBase, position) => {
    const path = router.asPath;
    if (path.includes(pathBase) === false) {
      const buttons = document.getElementsByClassName(classes.subItemMenu);
      if (buttons && buttons.length > 0) {
        buttons[position].style.color = "#606060";
        buttons[position].style.backgroundColor = "#f7f7f7" 
      }
  
      const texts = document.getElementsByClassName(classes.subBoldText);
      if (texts && texts.length > 0) {
        texts[position].style.color = "#606060";
        texts[position].style.fontWeight = 500;
      }
    }

    if (pathBase === "/" && path !== "/") {
      const buttons = document.getElementsByClassName(classes.subItemMenu);
      if (buttons && buttons.length > 0) {
        buttons[position].style.color = "#606060";
        buttons[position].style.backgroundColor = "#f7f7f7" 
      }
  
      const texts = document.getElementsByClassName(classes.subBoldText);
      if (texts && texts.length > 0) {
        texts[position].style.color = "#606060";
        texts[position].style.fontWeight = 500;
      }
    }
  }


  return (
    <div className={classes.root}>
      <Drawer className={classes.drawer} variant="permanent" classes={{ paper: classes.drawerPaper }} anchor="left">
        <div className={classes.toolbar} />
        <PopupState variant="popover" popupId="demo-popup-popover">
          {(popupState) => (
            <div>
              <ListItem disableRipple={true} button key="item0" className={classes.firstRound} variant="contained" {...bindTrigger(popupState)}>
                <ListItemIcon className={classes.avatar}>
                  <Avatar alt={theUser !== null && theUser.company !== null ? theUser.company.name : ""} src={theUser !== null && theUser.company !== null ? theUser.company.photo : ""} />
                </ListItemIcon>
                <ListItemText primary={<Typography className={classes.firstText}>{ theUser !== null && theUser.company !== null ? theUser.company.name : ""}</Typography>}
                  secondary={<Typography variant="body2" className={classes.secondText}>{ theUser !== null ? theUser.firstName + " " + theUser.lastName : ""}</Typography>} />
                {<ExpandMore />}
              </ListItem>
              <Popover px={5} {...bindPopover(popupState)} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                {
                  theUser === null ? 
                    <Box className={classes.pophover}>
                      <Box p={1}>
                        <CircularProgress color="primary" style={{ marginLeft: 10, width: 25, height: 25 }}/>
                      </Box>
                    </Box> :
                  theUser.isAdmin === true ? 
                  <Box className={classes.pophover}>
                    <Box p={1}>
                      <Link href={`/manage-profiles?companyId=${theUser.company.id}`}>
                        <a className={classes.anchorDrop}>
                          <Typography>Gerir perfis</Typography>
                        </a>
                      </Link>
                    </Box>
                    <Box p={1}>
                      <Link href="/settings">
                        <a className={classes.anchorDrop}>
                          <Typography>Configurações</Typography>
                        </a>
                      </Link>
                    </Box>
                    <Box p={1}>
                      <Link href="javascript:;">
                        <a className={classes.anchorDrop} onClick={() => { handleLogout() }}>
                          <Typography>Terminar Sessão</Typography>
                        </a>
                      </Link>
                    </Box>
                  </Box> :
                  <Box className={classes.pophover}>
                    <Box p={1}>
                      <Link href="javascript:;">
                        <a className={classes.anchorDrop} onClick={() => { handleLogout() }}>
                          <Typography>Terminar Sessão</Typography>
                        </a>
                      </Link>
                    </Box>
                  </Box>
                }  
              </Popover>
            </div>
          )}
        </PopupState>

        {
          theUser === null ? 
            <Box className={classes.pophover}>
                <Box p={1}>
                    <CircularProgress color="primary" style={{ marginLeft: 65, width: 25, height: 25 }}/>
                </Box>
            </Box>  : 
          theUser.isManager === true ?
            <List>
              <Link href={`/local-details?id=${Router.query.id}`}>
                <ListItem disableRipple={true} button key="item1" className={classes.roundBTN} 
                  onClick={() => { handleBgChange(0) }} 
                  onMouseEnter={() => { mouseEnter("/local-details", 0) }}  
                  onMouseOver={() => { mouseEnter("/local-details", 0) }} 
                  onMouseOut={() => { mouseOut("/local-details", 0) }} 
                  style={ router.asPath.includes("/local-details") ? selectedButton : unSelectedButton }
                  id="menuItem0">
                  <ListItemIcon className={classes.icon}>
                    <Image src="/icons/home.svg" width={18} height={18} />
                  </ListItemIcon>
                  <ListItemText primary={
                      <a className={classes.anchorLateralMenu}>
                        <Typography className={classes.boldText} 
                        style={ router.asPath.includes("/local-details") ? selectedText : unSelectedText }
                        >Minha Loja</Typography>
                      </a>
                  } />
                </ListItem>
              </Link>
            </List> :
          theUser.isAdmin === true ?
          <List>
            <Link href="/">
              <ListItem disableRipple={true} button key="item1" className={classes.roundBTN} 
              onClick={() => { handleBgChange(0) }} 
              onMouseEnter={() => { mouseEnter("/", 0) }}  
              onMouseOver={() => { mouseEnter("/", 0) }} 
              onMouseOut={() => { mouseOut("/", 0) }} 
              style={ router.asPath === "/" ? selectedButton : unSelectedButton }
              id="menuItem0">
                <ListItemIcon className={classes.icon}>
                  <Image src="/icons/home.svg" width={18} height={18} />
                </ListItemIcon>
                <ListItemText primary={
                    <a className={classes.anchorLateralMenu}>
                      <Typography className={classes.boldText}
                      style={ router.asPath === "/" ? selectedText : unSelectedText }
                      >Início</Typography>
                    </a>
                } />
              </ListItem>
            </Link>

            <ListItem disableRipple={true} button key="item2" className={classes.roundBTN} onClick={() => { handleBgChange(1); handleClick(); }} id="menuItem1">
              <ListItemIcon className={classes.icon}><Image src="/icons/icon-awesome-gift.svg" width={18} height={18} /></ListItemIcon>
              <ListItemText primary={
                <Typography className={classes.boldText}>
                  Fidelização
                </Typography>} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={open} timeout="auto" unmountOnExit className={classes.subMenu}>
              <List component="div" disablePadding>

                <Link href="/settings">
                  <ListItem disableRipple={true} button className={classes.subListItem}>
                    <Button disableRipple={true} className={clsx(classes.subItemMenu)} 
                    onClick={() => { handleSubItemBg(0) }} 
                    onMouseEnter={() => { mouseEnterSub("/settings", 0) }}  
                    onMouseOver={() => { mouseEnterSub("/settings", 0) }} 
                    onMouseOut={() => { mouseOutSub("/settings", 0) }}
                    style={ router.asPath.includes("/settings") ? selectedButton : unSelectedButton }
                    id="menuItemInner0">
                      <Box>
                          <a className={clsx(classes.anchorLateralMenu, classes.subBoldText)}
                          style={ router.asPath.includes("/settings") ? selectedText : unSelectedText }
                          >
                            Definições
                          </a>
                      </Box>
                    </Button>
                  </ListItem>
                </Link>

                <Link href="/statistics">
                  <ListItem disableRipple={true} button className={classes.subListItem}>
                    <Button disableRipple={true} className={clsx(classes.subItemMenu)} 
                    onClick={() => { handleSubItemBg(1) }} 
                    onMouseEnter={() => { mouseEnterSub("/statistics", 1) }}  
                    onMouseOver={() => { mouseEnterSub("/statistics", 1) }} 
                    onMouseOut={() => { mouseOutSub("/statistics", 1) }} 
                    style={ router.asPath.includes("/statistics") ? selectedButton : unSelectedButton }
                    id="menuItemInner1">
                      <Box>
                          <a className={clsx(classes.anchorLateralMenu, classes.subBoldText)}
                            style={ router.asPath.includes("/statistics") ? selectedText : unSelectedText }
                          >
                            Estatísticas
                          </a>
                      </Box>
                    </Button>
                  </ListItem>
                </Link>

                <Link href="/activity">
                  <ListItem disableRipple={true} button className={classes.subListItem}>
                    <Button disableRipple={true} className={clsx(classes.subItemMenu)} 
                    onClick={() => { handleSubItemBg(2) }} 
                    onMouseEnter={() => { mouseEnterSub("/activity", 2) }}  
                    onMouseOver={() => { mouseEnterSub("/activity", 2) }} 
                    onMouseOut={() => { mouseOutSub("/activity", 2) }} 
                    style={ router.asPath.includes("/activity") ? selectedButton : unSelectedButton }
                    id="menuItemInner2">
                      <Box>
                          <a className={clsx(classes.anchorLateralMenu, classes.subBoldText)}
                            style={ router.asPath.includes("/activity") ? selectedText : unSelectedText }
                          >
                            Actividade
                          </a>
                      </Box>
                    </Button>
                  </ListItem>
                </Link>

              </List>
            </Collapse>

            {/* <Link href="/promotions">    
              <ListItem disableRipple={true} button key="item3" className={classes.roundBTN} onClick={() => { handleBgChange(1) }} id="menuItem2">
                <ListItemIcon className={classes.icon}>
                  <Image src="/icons/icon-ionic-ios-megaphone.svg" width={18} height={18} />
                </ListItemIcon>
                <ListItemText primary={
                    <a className={classes.anchorLateralMenu}>
                      <Typography className={classes.boldText}>Promoções</Typography>
                    </a>
                } />
              </ListItem>
            </Link> */}

            <Link href="/clients">    
              <ListItem disableRipple={true} button key="item4" className={classes.roundBTN} 
              onClick={() => { handleBgChange(2) }} 
              onMouseEnter={() => { mouseEnter("/clients", 2) }}  
              onMouseOver={() => { mouseEnter("/clients", 2) }} 
              onMouseOut={() => { mouseOut("/clients", 2) }} 
              style={ router.asPath.includes("/clients") ? selectedButton : unSelectedButton }
              id="menuItem3">
                <ListItemIcon className={classes.icon}>
                  <Image src="/icons/icon-material-business-center.svg" width={18} height={18} />
                </ListItemIcon>
                <ListItemText primary={
                    <a className={classes.anchorLateralMenu}>
                      <Typography className={classes.boldText}
                        style={ router.asPath.includes("/clients") ? selectedText : unSelectedText }
                      >Clientes</Typography>
                    </a>
                } />
              </ListItem>
            </Link>

            <Link href="/points-of-sale">    
              <ListItem disableRipple={true} button key="item5" className={classes.roundBTN} 
              onClick={() => { handleBgChange(3) }} 
              onMouseEnter={() => { mouseEnter("/points-of-sale", 3) }}  
              onMouseOver={() => { mouseEnter("/points-of-sale", 3) }} 
              onMouseOut={() => { mouseOut("/points-of-sale", 3) }} 
              style={ router.asPath.includes("/points-of-sale") ? selectedButton : unSelectedButton }
              id="menuItem4">
                <ListItemIcon className={classes.icon}>
                  <Image src="/icons/icon-material-place.svg" width={18} height={18} />
                </ListItemIcon>
                <ListItemText primary={
                    <a className={classes.anchorLateralMenu}>
                      <Typography className={classes.boldText}
                        style={ router.asPath.includes("/points-of-sale") ? selectedText : unSelectedText }
                      >Locais de Vendas</Typography>
                    </a>
                } />
              </ListItem>
            </Link>
          </List> : 
            <Box className={classes.pophover}>
              <Box p={1}>
                <CircularProgress color="primary" style={{ marginLeft: 65, width: 25, height: 25 }}/>
              </Box>
            </Box>     
        }

      </Drawer>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  );
}


export default PermanentDrawerLeft;