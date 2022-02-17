import { useState } from 'react';
import { Box, Modal} from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

import backEndActions from '../../actions/back-end/tools';

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

//AddToolModal Component
const AddToolModal = ({ setToolListUpdated }) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [toolData, setToolData] = useState({
    name: "",
    link: "",
    description: "",
    tags: []
  })


  const handleAddTool = async () => {
    const response = await backEndActions.addTool(toolData);
    setToolListUpdated(true); // Says thad tool list was updated on the server
    handleClose();
  } 

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
            <span className={classes.spanLabel}>Tool Name</span><br/>
            <input type='text' placeholder='Tool' className={classes.input} 
              value={toolData.name} 
              onChange={({ target }) => setToolData((prevState) => ({ ...prevState, name: target.value }))}
            />
          </div> 
          <div>
            <span className={classes.spanLabel}>Tool Link</span><br/>
            <input type='text' placeholder='Tool link' className={classes.input} 
              value={toolData.link} 
              onChange={({ target }) => setToolData((prevState) => ({ ...prevState, link: target.value }))}
            />
          </div>
          <div>
            <span className={classes.spanLabel}>Tool Description</span><br/>
            <textarea rows={4} placeholder='Tool Description' className={classes.textArea} 
              value={toolData.description} 
              onChange={({ target }) => setToolData((prevState) => ({ ...prevState, description: target.value }))} 
            />
          </div>
          <div>
            <span className={classes.spanLabel}>Tags</span><br/>
            <input type='text' placeholder='Tags' className={classes.input} 
              value={
                toolData.tags.join('')
              } 
              onChange={({ target }) => {

                //console.log(toolData.tags.join(''));

                const tagsWrited = target.value;
                if (tagsWrited && tagsWrited.length > 0) {
                  const finalList = tagsWrited.split(" ");
                  const finalTags = [];
  
                  finalList.map(someTag => {
                    finalTags.push(someTag)
                  })
  
                  setToolData((prevState) => ({ ...prevState, tags: finalTags }))
                }
              }}
            />
          </div>
          <Box className={classes.buttonsBar}> 
            <button className={classes.customButton} onClick={() => handleAddTool()}>
                Add Tool
            </button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default AddToolModal;
