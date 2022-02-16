import Image from 'next/image';
import { makeStyles } from '@material-ui/core';

import { cssProperties } from "../css/header"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

const Header = () => {
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
            <input type='text' placeholder='search' className={classes.searchInput} />
          </div>
          <div className={classes.checkBox}>
            <input type="checkbox" checked className={classes.checkBoxInput}/> search  in logs only
          </div>
      </div>

      <div className={classes.addButtonBox}>
        <button className={classes.addButton}> 
          <span className={classes.plusSign}>+</span>
          Add
        </button>
      </div>
      <br/>
    </>
  );
};

export default Header;
