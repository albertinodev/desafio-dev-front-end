const cssProperties = (theme) => {
    return {
      searchBox: {
        border: '3px solid black',
        borderRadius: 3
      },
      searchBlock: {
        display: 'block',
        float: 'left'
      },
      searchIcon: {
        position: 'relative',
        top: 2,
        left: 4,
        height: 16,
        width: 16
      },
      searchInput: {
        top: -1,
        position: 'relative',
        border: 'none',
        marginLeft: 8,
        outline: "none"
      },
      checkBox: {
        position: 'relative',
        top: -24,
        left: 210
      },
      checkBoxInput: {
        backgroundColor: 'black',
        color: 'black'
      }
    }
  }
  
  module.exports = { cssProperties }
  