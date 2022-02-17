const cssProperties = (theme) => {
    return {
        title: {
            position: 'relative',
            fontWeight: "bold",
            top: -14
        },
        xIcon: {
            fontSize: 19, 
            fontWeight: "bolder"
        },
        customButton: {
            backgroundColor: '#ffffff',
            boxShadow: '2px 2px 1px #222',
            borderRadius: 2,
            border: '2px solid black',
            cursor: "pointer"
        },
        buttonsBar: {
            position: "relative",
            top: 15,
            left: 180
        },
        toolName: { 
            display: 'block', 
            float: 'left'
        },
        removeTool: { 
            display: 'block', 
            float: 'right', 
            marginBottom: 6,
            cursor: "pointer"
        },
        removeText: {
            position: "relative",
            top: -3
        },
        xIconRemove: { 
            fontWeight: 'bolder',
            fontSize: 14 
        },
    }
}

module.exports = { cssProperties }