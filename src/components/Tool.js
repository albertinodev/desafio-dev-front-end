import RemoveModal from './modals/RemoveModal';
import { makeStyles } from '@material-ui/core';

import { cssProperties } from "../css/tool"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

//Tool Component
const Tool = () => {
  const classes = useStyles();

  return (
    <div className={classes.toolBox}>
      <RemoveModal />
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
