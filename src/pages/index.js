import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import { Visibility } from '@material-ui/icons';
import React, { useState, useContext, useEffect } from "react";
import { makeStyles, Card, Grid, CardContent, Typography, Box } from '@material-ui/core';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';


import { cssProperties } from "../css/home"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties


const Home = ({ }) => {
  const classes = useStyles();


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no" />
        <meta name="description" content="Web site created using create-react-app"/>
        <meta name="keywords" content="React, TecnoPlus, Desafio, Tecnologia de Front-End"/>
        <title>Desafio Dev Front-End</title>
      </Head>
      <Box className={classes.home}>

      </Box>
    </>
  )
}

export default Home;

