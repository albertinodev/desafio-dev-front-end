import { useState } from 'react';
import { Box,  Button, Typography, Modal} from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import { cssProperties } from "../../css/add-tool"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

const AddTool = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div className={classes.addButtonBox}>
        <button className={classes.addButton} onClick={handleOpen}> 
          <span className={classes.plusSign}>+</span>
          Add
        </button>
      </div>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <span className={classes.title}>
            <span className={classes.xIcon}>+</span> Add New Tool
          </span>
          <br/><br/>
          <div>
            Tool Name<br/>
            <input type='text' placeholder='Tool' className={classes.input} />
          </div> 
          <div>
            Tool Link<br/>
            <input type='text' placeholder='Tool link' className={classes.input} />
          </div>
          <div>
          <textarea rows={4} placeholder='Tool link' className={classes.textArea} >
          </textarea>
          </div>
          <div>
          <input type='text' placeholder='Tags' className={classes.input} />
          </div>

          <Box className={classes.buttonsBar}> 
            <button className={classes.customButton}>
                Add Tool
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddTool;
