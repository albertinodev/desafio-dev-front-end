import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

import AddTool from './modals/AddToolModal'

import { cssProperties } from "../css/header"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

//Header Component
const Header = ({ searchText, setSearchTex, checkStatus, setCheckStatus, setToolListUpdated }) => {
  const classes = useStyles();
  return (
    <>
      <h1>VUTTR</h1>
      <h2>Very Useful Tools to Remember</h2>

      <div className={classes.searchBlock}>
          <div className={classes.searchBox}>
              <span className={classes.searchIcon}>
                <Image src={"/search.png"} alt="Icone de Procuar" width={16} height={16}/>
              </span>
            <input type='text' placeholder='search' value={searchText} className={classes.searchInput} 
              onChange={({ target }) => setSearchTex (target.value)} />
          </div>
          <div className={classes.checkBox}>
            <input type="checkbox" checked={checkStatus} className={classes.checkBoxInput} 
              onChange={() => setCheckStatus (!checkStatus)}
            /> 
            <span className={classes.textCheckBox}>
              search  in logs only
            </span>
          </div>
      </div>
      
      <AddTool setToolListUpdated={setToolListUpdated}/>
      <br/>
    </>
  );
};

export default Header;
