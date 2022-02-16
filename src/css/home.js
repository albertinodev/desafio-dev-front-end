const cssProperties = (theme) => {
    return {
        home: {
            margin: 0,
            minWidth: 500,
            width: "100%",
            maxWidth: 600,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        }
    }
}

module.exports = { cssProperties }