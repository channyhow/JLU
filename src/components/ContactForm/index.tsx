import React, { useEffect, useRef, useState } from 'react';
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import emailjs from 'emailjs-com';
import './styles.scss';

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
        await emailjs.sendForm('service_y2djk6c', 'template_8h8nlef', form.current, 'NYsnLB7L6KLFz63nQ');
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

    <div>
      {isSuccess && (
      <div style={{
        color: 'green', marginBottom: '10px', fontFamily: 'Inter', fontSize: '0.8em',
      }}
      >
        Merci pour votre message!
      </div>
      )}

      <form
        ref={form}
        onSubmit={sendEmail}
        style={{ display: 'flex', flexDirection: 'column' }}
        className={`contact-form ${isMobile ? 'mobile-width' : ''}`}
      >
        <TextField
          id="form-input-control-email"
          label="Email"
          name="user_email"
          placeholder="Email…"
          required
          style={{ marginBottom: '1em', backgroundColor: 'rgb(255, 255, 255, 0.1)', borderRadius: '5px' }}
        />
        <TextField
          id="form-input-control-last-name"
          label="Name"
          name="user_name"
          placeholder="Name…"
          required
          style={{ marginBottom: '1em', backgroundColor: 'rgb(255, 255, 255, 0.1)', borderRadius: '5px' }}
        />
        <TextField
          id="form-textarea-control-opinion"
          label="Message"
          name="user_message"
          placeholder="Message…"
          required
          multiline
          rows={4}
          style={{ marginBottom: '1em', backgroundColor: 'rgb(255, 255, 255, 0.1)', borderRadius: '5px' }}
        />
        <Button
          type="submit"
          style={{
            margin: '1em', border: '1px solid black', color: 'black', padding: '0.5em 1em', borderRadius: '0px', whiteSpace: 'nowrap', backgroundColor: 'transparent',
          }}
        >
          <h5>Envoyer</h5>
        </Button>
      </form>

      {/* Error dialog */}
      <Dialog open={isErrorDialogOpen} onClose={handleCloseErrorDialog}>
        <DialogTitle>Oopsie Daisy</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Une erreur s&apos;est glissée dans l&apos;adresse email entrée,
            <br />
            pourriez-vous y jeter un coup d&apos;oeil?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseErrorDialog}
            style={{
              margin: '1em', border: '1px solid black', color: 'black', padding: '0.5em 1em', borderRadius: '0px', whiteSpace: 'nowrap', backgroundColor: 'transparent',
            }}
          >

            <h5>OK</h5>
          </Button>
        </DialogActions>
      </Dialog>
    </div>

  );
}

export default ContactForm;
