import Image from 'next/image';
import Head from 'next/head';
import { Grid, Typography, makeStyles, Box } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    mainGrid: {
        minHeight: "100% !important",
    },
    content:{
        minHeight: "100% !important",
        minHeight: "100vh"
    },
    title:{
        fontWeight: 900,
    }
  }));

const Auth = (props) => {
    const classes = useStyles();
    return(
        <Grid 
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className={classes.mainGrid}
        >
            <Head>
                <title>
                    {props.title ? `${props.title} | `: ``}
                    Loyalty Engine
                </title>
            </Head>
            <Grid container item xs={10} md={8} className={classes.content}>
                <Grid 
                    container
                    direction="column" 
                    alignItems="center"
                    justifyContent="center"
                    item xs={12}
                    >
                    <Box pb={5}>
                        <Typography variant="h1" color="primary" className={classes.title} >
                            <Box style={{marginTop: 40}}>
                        <Image src="/icons/Logo-large.svg" width={150} height={100}/>
                        </Box>
                        </Typography>
                    </Box>
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Auth;