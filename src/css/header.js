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
      searchIncon: {
        position: 'relative',
        top: 3,
        left: 4
      },
      searchInput: {
        top: -1,
        position: 'relative',
        border: 'none',
        marginLeft: 8
      },
      checkBox: {
        position: 'relative',
        top: -24,
        left: 210
      },
      checkBoxInput: {
        backgroundColor: 'black',
        color: 'black'
      },
      addButton: {
        backgroundColor: '#ffffff',
        boxShadow: '2px 2px 1px #222',
        borderRadius: 2,
        border: '2px solid black'
      },
      plusSign: {
        fontSize: 20,
        fontWeight: 'bolder',
        position: 'relative',
        marginRight: 2,
        top: 3
      },
      addButtonBox: {
        display: 'block',
        float: 'right'
      },
    }
  }
  
  module.exports = { cssProperties }
  