import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    tabsWrapper:{
        flex:'30%',
        borderLeft:"0.5px solid grey"
    }
});

const Tabs = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.tabsWrapper}>
            NOTE TABS TO BE HERE
        </div>
        </>
    )
}

export default Tabs 
