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
        buttonsBar: {
            position: "relative",
            top: 15,
            left: 180
        }
    }
}

module.exports = { cssProperties }