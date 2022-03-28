//create header
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, TextField } from '@mui/material';
import './header.css';

//deifne theme for textfield
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    textField: {
        backgroundColor: "#ffffff !important",
        borderRadius: "8px !important",
    },
    button: {
        width: '180px',
        border: "1px solid #ffffff",
        color: '#ffffff !important',
    }
}));


function CustomHeader() {

    const classes = useStyles();

    return (
        <header className='main_header'>
            <div className="branding">
                <div className="left_branding_header">
                    <img src="https://cdn-resources.highradius.com/resources/wp-content/uploads/2020/03/Highradius-logo.png" alt="abcproducts" width={150} />
                </div>
                <div className="right_branding_header">
                    <img src="https://cdn-resources.highradius.com/resources/wp-content/uploads/2020/03/Highradius-logo.png" alt="logo" width={150} />
                </div>
            </div>
            <div className="functional_part">
                <div className="buttons_group">
                    <ButtonGroup variant="outlined" aria-label="outlined button group" >
                        <Button className={classes.button}>PREDICT</Button>
                        <Button className={classes.button}>ANALYTICS VIEW</Button>
                        <Button className={classes.button}>ADVANCE SEARCH</Button>
                    </ButtonGroup>
                </div>
                <div className="search_box_container">
                    <TextField id="outlined-basic" variant='outlined' placeholder='Search customer Id' className={classes.textField}></TextField>
                </div>
                <div className="buttons_group_crud">
                    <ButtonGroup variant="outlined" aria-label="outlined primary button group" >
                        <Button className={classes.button}>ADD</Button>
                        <Button className={classes.button}>EDIT</Button>
                        <Button className={classes.button}>DELETE</Button>
                    </ButtonGroup>
                </div>
            </div>
        </header>
    );

}

export default CustomHeader;
