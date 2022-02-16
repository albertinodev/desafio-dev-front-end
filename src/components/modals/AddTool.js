import { useState } from 'react';
import { Box,  Button, Typography, Modal} from '@material-ui/core';

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

const RemoveModal = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
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
            <button className={classes.customButton}>
                Yes, Remove
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default RemoveModal;
