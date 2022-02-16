import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Tool from '../components/Tool';

import { makeStyles, Box } from '@material-ui/core';

import { cssProperties } from "../css/home"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

const Home = ({ }) => {
  const classes = useStyles();
  const [searchText, setSearchTex] = useState("");

  // UseEffect to control and use the text for search content
  useEffect(() => {

  }, [searchText])

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
        <Header searchText={searchText} setSearchTex={setSearchTex}/>
        <Tool/>
        <Tool/>
        <Tool/>
      </Box>
    </>
  )
}

export default Home;

