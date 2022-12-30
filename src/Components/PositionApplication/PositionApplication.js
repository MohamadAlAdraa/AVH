// USED PACKAGES
import { useState } from 'react'
// import {useDropzone} from 'react-dropzone'
import { Button, createTheme, Grid, TextField, useMediaQuery, MuiThemeProvider } from '@material-ui/core'
import { FileDrop } from 'react-file-drop';
// CSS IMPORTS
import classes from './PositionApplication.module.css'

// USED ICONS
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import {FileField} from './InputField/InputField';

const formLabelsTheme = createTheme({
    overrides: {
      MuiFormLabel: {
        asterisk: {
          color: '#FF0000',
        }
      }
    }
  })

const PositionApplication = () => {

    const mobileSize = useMediaQuery('(max-width: 600px)');
    
    const [applicationData, setApplicationData] = useState({firstName:'', lastName: '', email:'', headline:'', phone:'', address:''})
    const [photoName, setPhotoName] = useState('');
    const [photo, setPhoto] = useState('');
    const [coverLetterName, setCoverLetterName] = useState('');
    const [coverLetter, setCoveLetter] = useState('');
    const [resumeName, setResumeName] = useState('');
    const [resume, setResume] = useState('');
    const [DraggedOverPhoto, setDraggedOverPhoto] = useState(false);
    const [DraggedOverCoverLetter, setDraggedOverCoverLetter] = useState(false);
    const [DraggedOverResume, setDraggedOverResume] = useState(false);

    const handleReset = () =>{
        setApplicationData({firstName:'', lastName: '', email:'', headLine:'', phone:'', address:''})
        setPhotoName('')
        setPhoto('')
        setCoverLetterName('')
        setCoveLetter('')
        setResumeName('')
        setResume('')
    }

    const handleSubmit = () =>{
        console.log(applicationData);
        console.log(photo);
        console.log(resume);
        console.log(coverLetter);
        handleReset();
    }
    
    const handlePhotoDrop = (files) => {
        setPhoto(files[0]);
        setPhotoName(files[0].name);
    }
    const handleCoverLetterDrop = (files) => {
        setCoverLetterName(files[0]);
        setCoverLetterName(files[0].name);
    }
    const handleResumeDrop = (files) => {
        setResume(files[0]);
        setResumeName(files[0].name);
    }
    
    const handleFileChange = (e) => {
        
    }
    return (
        <>
            <div className={classes.PositionApplication}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p> <span style={{ color: 'red' }}>*</span> Required Fields</p>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.Pc}>
                            <div>
                                <h2 style={{ color:'#339bc6' }}>Personal Information</h2>
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
                                <Grid item container xs={12} justifyContent='space-between'>
                                    <Grid item xs={12} sm={5}>
                                        <TextField id="firstName" label="First Name" name="firstName"  required variant='filled' fullWidth />
                                        {/* <InputField type='text' id='firstName' name='firstName' label='First Name' value={applicationData.firstName} valueChange={handleOnChange} IsRequired /> */}
                                    </Grid>
                                    {mobileSize ? <Grid item xs={12}><br /></Grid> : null}
                                    <Grid item xs={12} sm={5}>
                                        <TextField id="lastName" label="Last Name" name="lastName"  required variant='filled' fullWidth />
                                        {/* <InputField type='text' id='lastName' name='lastName' label='Last Name' value={applicationData.lastName} valueChange={handleOnChange} IsRequired /> */}
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        <TextField id="email" label="Email" name="email" required variant='filled' fullWidth />
                                        {/* <InputField type='text' id='email' name='email' label='Email' value={applicationData.email} valueChange={handleOnChange} IsRequired /> */}
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        <TextField id="headline" label="Headline" name="headline" variant='filled' fullWidth />
                                        {/* <InputField type='text' id='headLine' name='headLine' label='Headline' valueChange={handleOnChange} value={applicationData.headLine} /> */}
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        <TextField id="phone" label="Phone" name="phone" required variant='filled' fullWidth />
                                        {/* <InputField type='text' id='phone' name='phone' label='Phone' valueChange={handleOnChange} value={applicationData.phone} IsRequired /> */}
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        <TextField id="address" label="Address" name="address" variant='filled' fullWidth />
                                        {/* <InputField type='text' id='address' name='address' label='Address' valueChange={handleOnChange} value={applicationData.address} /> */}
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        {/* <FileField id='photo' your='your photo' name='photo' label='Photo' fileName={photoName} rootProps={getInputProps()} inputProps={getInputProps()} isDragActive={isDragActive} /> */}
                                        <FileDrop
                                            onDragOver={() => setDraggedOverPhoto(true)}
                                            onDragLeave={() => setDraggedOverPhoto(false)}
                                            onDrop={(files) => handlePhotoDrop(files)}
                                        >
                                            <FileField id='photo' your='your photo' name='photo' label='Photo' fileName={photoName} DraggedOver={DraggedOverPhoto} handleChange={handleFileChange}  />
                                        </FileDrop>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        {/* <FileField IsRequired id='coverLetter' your='your cover letter' name='coverLetter' label='Cover Letter' fileName={coverLetterName} rootProps={getRootProps()} inputProps={getInputProps()} isDragActive={isDragActive} /> */}
                                        <FileDrop
                                            onDragOver={() => setDraggedOverCoverLetter(true)}
                                            onDragLeave={() => setDraggedOverCoverLetter(false)}
                                            onDrop={(files) => handleCoverLetterDrop(files)}
                                        >
                                        <FileField IsRequired id='coverLetter' your='your cover letter' name='coverLetter' label='Cover Letter' fileName={coverLetterName} DraggedOver={DraggedOverCoverLetter} handleChange={handleFileChange} />
                                        </FileDrop>
                                    </Grid>
                                </Grid>
                                <br />
                                <Grid container item xs={12}>
                                    <Grid item xs={12}>
                                        {/* <FileField IsRequired id='resume' your='your resume' name='resume' label='Resume' fileName={resumeName} rootProps={getRootProps()} inputProps={getInputProps()} isDragActive={isDragActive} /> */}
                                        <FileDrop
                                            onDragOver={() => setDraggedOverResume(true)}
                                            onDragLeave={() => setDraggedOverResume(false)}
                                            onDrop={(files) => handleResumeDrop(files)}
                                        >
                                        <FileField IsRequired id='resume' your='your resume' name='resume' label='Resume' fileName={resumeName} DraggedOver={DraggedOverResume} handleChange={handleFileChange} />
                                        </FileDrop>
                                    </Grid>
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
            <br />
        </>
    )
}

export default PositionApplication
