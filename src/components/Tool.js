import RemoveModal from './modals/RemoveModal';
import { makeStyles } from '@material-ui/core';

import { cssProperties } from "../css/tool"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

//Tool Component
const Tool = ({ tool, setToolListUpdated }) => {
  const classes = useStyles();

  return (
    <div className={classes.toolBox}>
      <RemoveModal tool={tool} setToolListUpdated={setToolListUpdated}/>
        <div className={classes.description}>
          <p>
            { tool.description }
          </p>
        </div>
        {
          tool.tags.length > 0 ?
            tool.tags.map(tag => <span className={classes.ashTag}>#{tag + ",  "}</span>):
              <></>
        }
      </div>
  );
};

export default Tool;
