// USED PACKAGES
import React, {useEffect} from 'react'
import { Checkbox, Container, FormControlLabel } from '@material-ui/core'
import { Button, createTheme, Grid, TextField, useMediaQuery, MuiThemeProvider } from '@material-ui/core'
import HtmlParser from 'react-html-parser'
import { FileDrop } from 'react-file-drop';

// USED COMPONENTS
import TopBackground from '../../Components/TopBackground/TopBackground'

// CSS IMPORTS
import classes from './Invest.module.css'

// USED IMAGES
import Invest_bg from '../../assets/Images/Invest.jpg'

// USED ICONS
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { FileField } from '../../Components/PositionApplication/InputField/InputField';


const formLabelsTheme = createTheme({
    overrides: {
      MuiFormLabel: {
        asterisk: {
          color: '#FF0000',
        }
      }
    }
})

const Invest = () => {

    const mobileSize = useMediaQuery('(max-width: 600px)');

    const handleReset = () =>{
        // setApplicationData({firstName:'', lastName: '', email:'', headLine:'', phone:'', address:''})
        // setPhotoName('')
        // setPhoto('')
        // setCoverLetterName('')
        // setCoveLetter('')
        // setResumeName('')
        // setResume('')
    }
    const handleSubmit = () =>{
        // setApplicationData({firstName:'', lastName: '', email:'', headLine:'', phone:'', address:''})
        // setPhotoName('')
        // setPhoto('')
        // setCoverLetterName('')
        // setCoveLetter('')
        // setResumeName('')
        // setResume('')
    }
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    return (    
        <>
            <TopBackground bg={Invest_bg} name='Invest' />
            <div className={classes.Invest}>
                <Container>
                    <p className={classes.Title}>If you are interested in investing with AVH, you will need to fill in an alternative application forms.</p>
                    <div className={classes.InvestApplication}>
            
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <p> <span style={{ color: 'red' }}>*</span> Required Fields</p>
                            </Grid>
                            <Grid item xs={12}>
                                <div className={classes.Pc}>
                                    <div>
                                        <h2 style={{ color:'#339bc6' }}>Application Form</h2>
                                    </div>
                                    <div>
                                        <Button
                                            variant="contained"
                                            color="default"
                                            size="small"
                                            className={classes.button}
                                            startIcon={<DeleteOutlineIcon />}
                                            onClick={handleReset}
                                        >
                                            Clear
                                        </Button>
                                    </div>
                                </div>
                            </Grid>
                            <br />  
                            <Grid item xs={12}>
                                <hr />
                            </Grid>
                            <br />
                            <Grid container item xs={12}>
                                <MuiThemeProvider theme={formLabelsTheme}>
                                        <form autoComplete='off' style={{ width: '100%' }} id='application'>
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="companyName" label="Name of Company/Business" name="companyName" required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="businessNature" label="Nature of Business" name="businessNature" required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid item container xs={12} justifyContent='space-between'>
                                                <Grid item xs={12} sm={5}>
                                                    <TextField id="address" label="Address" name="address"  required variant='filled' fullWidth />
                                                </Grid>
                                                {mobileSize ? <Grid item xs={12}><br /></Grid> : null}
                                                <Grid item xs={12} sm={5}>
                                                    <TextField id="postCode" label="Postcode" name="postCode"  required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="contactName" label="Contact Name" name="contactName" required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid item container xs={12} justifyContent='space-between'>
                                                <Grid item xs={12} sm={5}>
                                                    <TextField id="contactPhone" label="Contact Phone" name="contactPhone"  required variant='filled' fullWidth />
                                                </Grid>
                                                {mobileSize ? <Grid item xs={12}><br /></Grid> : null}
                                                <Grid item xs={12} sm={5}>
                                                    <TextField id="contactFax" label="Contact Fax" name="contactFax" variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="contactEmail" label="Contact Email" name="contactEmail" required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="olderAccountNumber" label="If you are an existing customer, please quote your account number" name="olderAccountNumber" variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="problem" 
                                                    label={HtmlParser("<span>Let's talk about your idea. What problem is your company solving ?</span><span style={color: #ccc}> (In less than 100 words)</span> ")} minRows='4' name="problem" multiline required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="vision" 
                                                    label={HtmlParser("<span>What's the vision you have for this company ?</span><span style={color: #ccc}> (In less than 100 words)</span> ")} minRows='4' name="vision" multiline required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="traction" 
                                                    label={HtmlParser("<span>What traction/progress have you made so far towards this vision ?</span><span style={color: #ccc}> (Eg: product, customers, revenue, funds raised)</span> ")} minRows='4' name="traction" multiline required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="knowAboutYourTeam" 
                                                    label={HtmlParser("<span>What should we know about you and your team ?</span><span style={color: #ccc}> (In less than 100 words)</span> ")} minRows='4' name="knowAboutYourTeam" multiline required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <TextField id="LinkedinProfile" 
                                                    label={HtmlParser("<span>What is your Linkedin profile URL ?</span>")} name="LinkedinProfile" required variant='filled' fullWidth />
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid container item xs={12}>
                                                <Grid item xs={12}>
                                                    <FileDrop
                                                        // onDragOver={() => setDraggedOverResume(true)}
                                                        // onDragLeave={() => setDraggedOverResume(false)}
                                                        // onDrop={(files) => handleResumeDrop(files)}
                                                    >
                                                    <FileField IsRequired id='additionDoc' your='your files' name='additionDoc' label='If you have additional materials to help us make a better decision, please upload them here.(This could include a pitch deck or other supporting documents)'  />
                                                    </FileDrop>
                                                </Grid>
                                            </Grid>
                                            <br />
                                            <Grid item xs={12} container justifyContent='flex-end'>
                                            <FormControlLabel
                                                control={<Checkbox name="newsletter" />}
                                                label="Would you like to join our Community newsletter?"
                                            />
                                                    
                                            </Grid>
                                            <br />
                                            <Grid item xs={12} container justifyContent='flex-end'>
                                                <Button
                                                    variant="contained"
                                                    color="default"
                                                    size="large"
                                                    role='button'
                                                    className={classes.button}
                                                    onClick={handleSubmit}
                                                >
                                                    submit
                                                </Button>
                                            </Grid>
                                            
                                        </form>

                                    </MuiThemeProvider>
                                </Grid>
                            </Grid>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Invest
