const cssProperties = (theme) => {
    return {
      toolBox: {
        backgroundColor: 'white',
        border: '3px solid black',
        borderRadius: 3,
        padding: 10,
        marginTop: 24
      },
      toolName: { 
          display: 'block', float: 'left'
      },
      removeTool: { 
          display: 'block', 
          float: 'right', 
          marginBottom: 6,
          cursor: "pointer"
       },
      xIcon: { 
          fontWeight: 'bolder',
          fontSize: 14 
      },
      description: { 
        textAlign: "left",
        marginTop: 10, 
        marginBottom: 10,
        marginRight: 10
      },
      ashTag: { 
        fontWeight: "bolder" 
      }
    }
  }
  
  module.exports = { cssProperties }
  