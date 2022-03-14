const styles = {
    section: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        minHeight: '100vh',
        background: 'radial-gradient(circle, rgba(38,65,57,1) 0%, rgba(20,78,102,1) 62%)',
    },

    sectionTitle: {
        padding: '15px 0',
        fontSize: '30px',
        color: 'rgb(255,255,255)',
    },

    sectionMain: {
        position: 'relative',
        width: '50%',
        backgroundolor: 'red',
    },

    formField: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 0',
    },

    labelField: {
        display: 'inline-block',
        width: '20%',
        fontSize: '20px',
        textAlign: 'center',
        color: 'rgb(255,255,255)',
        border: '1px solid rgb(255,255,255)',
    },

    inputField: {
        width: '70%',
    },

    button: {
        display: 'inline-block',
        padding: '10px 30px',
        border: '1px solid rgb(255,255,255)',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%)',
        marginTop: '20px',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: 'rgb(255,255,255)',
        backgroundColor: 'transparent',
        textAlign: 'center',
    },

    summaryList: {
        padding: '15px 0 0 0',
        listStyle: 'none',
        textAlign: 'center',
        color: 'rgb(255,255,255)',
    },

    summaryItem: {
        padding: '5px',
    },
};

export default styles;
