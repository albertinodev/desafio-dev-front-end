const cssProperties = (theme) => {
    return {
        title: {
            position: 'relative',
            fontWeight: "bold",
            top: -14
        },
        spanLabel: {
            position: "relative",
            top: -4
        },
        xIcon: {
            fontSize: 19, 
            fontWeight: "bolder"
        },
        buttonsBar: {
            position: "relative",
            left: 280,
            height: 40,
            marginTop: 15,
            marginBottom: -20
        },
        customButton: {
            backgroundColor: '#ffffff',
            boxShadow: '2px 2px 1px #222',
            borderRadius: 2,
            border: '2px solid black'
        },
        input: {
            width: 350,
            height: 30,
            border: 'none',
            outline: "none",
            borderRadius: 3,
            marginBottom: 10,
            border: "3px solid black"
        },
        textArea: {
            width: 350,
            border: 'none',
            outline: "none",
            borderRadius: 3,
            marginBottom: 10,
            border: "3px solid black"
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