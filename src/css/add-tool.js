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
            border: '2px solid black'
        },
        input: {
            top: -1,
            position: 'relative',
            border: 'none',
            marginLeft: 8,
            outline: "none"
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
        }
    }
}

module.exports = { cssProperties }