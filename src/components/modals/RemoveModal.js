import { useState } from 'react';
import { Box,  Button, Typography, Modal} from '@material-ui/core';

import backEndActions from '../../actions/back-end/tools';

import { makeStyles } from '@material-ui/core';

import { cssProperties } from "../../css/remove-tool"; // Get the css properties
const useStyles = makeStyles((theme) => (cssProperties(theme))); // Set the css properties

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
};

//Remove Tool Component
const RemoveModal = ({ tool, setToolListUpdated }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDelete = async () => {
    const response = await backEndActions.deleteTool(tool.id);
    setToolListUpdated(true); // Says to main component that some tool was deleted
    handleClose() // Close Modal
  }

  return (
    <div>
      <div style={{ marginBottom: 8, marginTop: -4 }}>
        <div className={classes.toolName}>
          <a href={tool.link}>{tool.name}</a>
        </div>
        <div className={classes.removeTool} onClick={handleOpen}>
          <span className={classes.xIcon}>X</span> <span className={classes.removeText}>remove</span>
        </div>
      </div>
      <br/>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <span className={classes.title}>
            <span className={classes.xIcon}>x</span> Remove Tool
          </span>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are You Sure You Want to Remove this Tool?
          </Typography>

          <Box className={classes.buttonsBar}>  
            <button className={classes.customButton} style={{ marginRight: 20 }} onClick={() => handleClose() }>
                Cancel
            </button>
            <button className={classes.customButton} onClick={ async () => {
              await handleDelete()
            }}>
                Yes, Remove
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default RemoveModal;
