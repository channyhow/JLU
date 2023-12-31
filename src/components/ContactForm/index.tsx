import React, { useEffect, useRef, useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Grid,
} from '@mui/material';
import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isErrorDialogOpen, setIsErrorDialogOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const userEmail = form.current?.user_email?.value;

    if (!userEmail || !emailRegex.test(userEmail)) {
      // Display the error dialog
      setIsErrorDialogOpen(true);
      return;
    }

    try {
      if (form.current) {
        // CHANGE THIS BIT
        await emailjs.sendForm('service_hgkesjn', 'template_xsgu35l', form.current, 'O8_eni2QDzWuo6roS');
        setIsSuccess(true); // Show success message
        form.current.reset(); // Reset the form
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Email sending failed:', error);
      // Display the error dialog
      setIsErrorDialogOpen(true);
    }
  };

  const handleCloseErrorDialog = () => {
    setIsErrorDialogOpen(false);
  };

  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid
        item
        xs={isMobile ? 12 : 6}
        sm={isMobile ? 12 : 6}
        md={isMobile ? 6 : 12}
        lg={isMobile ? 6 : 12}
        xl={isMobile ? 6 : 12}
      >
        <div className={`contact-form ${isMobile ? 'mobile-width' : ''}`}>
          {isSuccess && (
          <div style={{
            color: 'green', marginBottom: '10px', fontFamily: 'Inter', fontSize: '0.8em',
          }}
          >
            Thank you for your message!
          </div>
          )}

          <form
            ref={form}
            onSubmit={sendEmail}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <TextField
              id="form-input-control-email"
              label="Email"
              name="user_email"
              placeholder="Email…"
              required
              style={{ marginBottom: '1em', width: 'auto' }}
            />
            <TextField
              id="form-input-control-last-name"
              label="Name"
              name="user_name"
              placeholder="Name…"
              required
              style={{ marginBottom: '1em' }}
            />
            <TextField
              id="form-textarea-control-opinion"
              label="Message"
              name="user_message"
              placeholder="Message…"
              required
              multiline
              rows={4}
              style={{ marginBottom: '1em' }}
            />
            <Button type="submit" style={{ margin: '1em', backgroundColor: 'rgb(255, 255, 255, 0.2)', color: 'white' }}>
              Submit
            </Button>
          </form>

          {/* Error dialog */}
          <Dialog open={isErrorDialogOpen} onClose={handleCloseErrorDialog}>
            <DialogTitle>Oopsie Daisy</DialogTitle>
            <DialogContent>
              <DialogContentText>
                There&apos;s something about the email address entered,
                could you have a quick look?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleCloseErrorDialog}
                style={{ margin: '1em', backgroundColor: 'rgb(255, 255, 255, 0.2)', color: 'white' }}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    </Grid>

  );
}

export default ContactForm;
