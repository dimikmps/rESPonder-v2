import React, { useContext, useState } from 'react';
import {
  TextField,
  Button,
  Grid,
  Box,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import PageTemplateComponent from '../../components/PageTemplateComponent/PageTemplateComponent';
import { SensorContext } from '../../contexts/SensorContext';

interface CustomFormProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormValidationProps {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

/**
 * Contact page
 * Generates the page that consists an email-contact form
 * @returns {JSX.Element} - The ContactPage JSX element.
 */
const ContactPage: React.FC = () => {
  const selectedSensorContext = useContext(SensorContext);

  if (!selectedSensorContext) {
    throw new Error('There was something wrong with the Sensor Provider');
  }

  const { setSelectedSensor } = selectedSensorContext;

  // Reset selected sensor when visiting the contact page
  setSelectedSensor('');

  const [formValues, setFormValues] = useState<CustomFormProps>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormValidationProps>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let valid = true;
    const newErrors = {
      name: false,
      email: false,
      subject: false,
      message: false,
    };

    if (formValues.name.trim() === '') {
      newErrors.name = true;
      valid = false;
    }
    if (!validateEmail(formValues.email)) {
      newErrors.email = true;
      valid = false;
    }
    if (formValues.subject.trim() === '') {
      newErrors.subject = true;
      valid = false;
    }
    if (formValues.message.trim() === '') {
      newErrors.message = true;
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Triggers the informational modal to open  / Only for this demo's puproses
      setModalOpen(true);

      // Add form submission logic here
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <PageTemplateComponent pageTitle='Contact us'>
      <Box width='100%' display='flex' justifyContent='center'>
        <form noValidate onSubmit={handleSubmit} style={{ width: '35vw' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Name'
                name='name'
                value={formValues.name}
                onChange={handleInputChange}
                error={errors.name}
                helperText={errors.name ? 'Name is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Email'
                name='email'
                type='email'
                value={formValues.email}
                onChange={handleInputChange}
                error={errors.email}
                helperText={errors.email ? 'Enter a valid email' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Subject'
                name='subject'
                value={formValues.subject}
                onChange={handleInputChange}
                error={errors.subject}
                helperText={errors.subject ? 'Subject is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Message'
                name='message'
                multiline
                rows={4}
                value={formValues.message}
                onChange={handleInputChange}
                error={errors.message}
                helperText={errors.message ? 'Message is required' : ''}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type='submit' variant='contained' color='primary'>
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      <Dialog
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Contact-sending logic is not implemented in this demo version.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color='primary' autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </PageTemplateComponent>
  );
};

export default ContactPage;
