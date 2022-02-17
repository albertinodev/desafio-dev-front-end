import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Tool from '../components/Tool';
import api from '../services/api'

import { makeStyles, Box } from '@material-ui/core';

import backEndActions from '../actions/back-end/tools';

import { cssProperties } from "../css/home"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

export const getServerSideProps = async (context) => {
  const dataArray = await backEndActions.getTools();
  return {
    props: {
      dataArray
    } // will be passed to the page component as props
  }
}

const Home = ({ dataArray }) => {
  const classes = useStyles();
  const [searchText, setSearchTex] = useState("");
  const [checkStatus, setCheckStatus] = useState(false);

  const [tools, setTools] = useState(dataArray ? dataArray : []);
  const [toolListUpdated, setToolListUpdated] = useState(false);

  // UseEffect to control and use the text for search content
  useEffect(async () => {
    if (searchText !== "") {
      const arrayData = await backEndActions.getTools(searchText);
      setTools(arrayData ? arrayData : []);
    } else {
      const arrayData = await backEndActions.getTools();
      setTools(arrayData ? arrayData : []);
    }
  }, [searchText])

  // UseEffect to control and che if some tool was delete to update the main list
  useEffect(async () => {
    if (toolListUpdated) {
      const arrayData = await backEndActions.getTools();
      setTools(arrayData ? arrayData : []);
    }
  }, [toolListUpdated])

  
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
        <Header searchText={searchText} setSearchTex={setSearchTex} checkStatus={checkStatus} setCheckStatus={setCheckStatus} setToolListUpdated={setToolListUpdated}/>
        {
          tools.length === 0 ?
            <></> :
            tools.map(tool => <Tool tool={tool} setToolListUpdated={setToolListUpdated}/>) 
        }
      </Box>
    </>
  )
}

export default Home;

