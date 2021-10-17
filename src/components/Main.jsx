import React from 'react'
import { makeStyles } from '@mui/styles';
import Sidebar from './Sidebar';
import Tabs from './Tabs'
import Scroll from './Scroll'

const useStyles = makeStyles({
    mainWrapper:{
        display:'flex'
    }
});
const Main = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainWrapper}>
            {/* SIDEBAR */}
            <Sidebar />
            {/* TABS */}   
            <Tabs />
            {/* MAIN */} 
            <Scroll />
        </div>
    )
}

export default Main


// import React from 'react'
// import { makeStyles } from '@mui/styles';
// import Sidebar from './Sidebar';
// import Tabs from './Tabs'
// import Scroll from './Scroll'

// const useStyles = makeStyles({
//     mainWrapper:{
//         display:'flex'
//     }
// });
// const Main = () => {
//     const classes = useStyles();
//     return (
//         <div className={classes.mainWrapper}>
//             {/* SIDEBAR */}
//             <Sidebar />
//             {/* TABS */}
//             <Tabs />
//             {/* MAIN */} 
//             <Scroll />
//         </div>
//     )
// }

// export default Main
