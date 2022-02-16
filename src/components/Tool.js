import RemoveModal from './modals/RemoveModal';
import { makeStyles } from '@material-ui/core';

import { cssProperties } from "../css/tool"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

const Tool = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolBox}>
      {/* <RemoveModal /> */}
        <div style={{ marginBottom: 8 }}>
          <div className={classes.toolName}>
            <a href='/'>Notion</a>
          </div>
          <div className={classes.removeTool}>
            <span className={classes.xIcon}>X</span> remove
          </div>
        </div>
        <br/>
        <div className={classes.description}>
          <p>
            Efseyfgyseg sefsef sheufhsefukhsuefh ukshzkuefhukszehfzuksheh 
            fhsuzefhus
          </p>
        </div>
        <span className={classes.ashTag}>#whaterevr</span>, <span style={{ fontWeight: "bolder" }}>#whaterevr</span>, <span style={{ fontWeight: "bolder" }}>#whaterevr</span>
      </div>
  );
};

export default Tool;
