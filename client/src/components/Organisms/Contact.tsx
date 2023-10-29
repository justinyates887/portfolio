import { Typography, TextField, Button, Container, Box } from "@mui/material";
import React from "react";
import { Navbar } from "../Molecules";
import { useFormControls } from "../../utils/useFormControls.tsx";

/*
    TO:DO
    Add cloudflare turnstile when URL is obtained
*/

export function Contact(){
    const {
        handleInputValue,
        handleFormSubmit,
        formIsValid,
        errors,
        values
    } = useFormControls();

    const inputFieldValues = [
        {
          name: "fullName",
          label: "Full Name",
          id: "my-name"
        },
        {
          name: "email",
          label: "Email",
          id: "my-email"
        },
        {
          name: "message",
          label: "Message",
          id: "my-message",
          multiline: true,
          rows: 10
        }
      ];

      const inputStyles = {
        borderRadius: '15px',
        color: "white",
        border: "1px solid white"
      };

      return (
        <>
        <Navbar />
        <div style={{ backgroundColor: '#191919', padding: '20px', textAlign: "center" }}>
          <Container maxWidth="sm">
            <Typography variant="h3" sx={{ color: 'white', margin: '20px' }}>
              Contact
            </Typography>
            <form onSubmit={handleFormSubmit} style={{ backgroundColor: '#353535', padding: '20px', borderRadius: '20px' }}>
              {inputFieldValues.map((inputFieldValue, index) => (
                <Box key={index} sx={{ marginBottom: '20px' }}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    id={inputFieldValue.name}
                    name={inputFieldValue.name}
                    placeholder={!values[inputFieldValue.name] ? inputFieldValue.label + '*' : ''}
                    onBlur={handleInputValue}
                    onChange={handleInputValue}
                    multiline={inputFieldValue.multiline ?? false}
                    rows={inputFieldValue.rows ?? 1}
                    autoComplete="none"
                    InputProps={{
                      style: inputStyles,
                    }}
                    {...(errors[inputFieldValue.name] && { error: true, helperText: errors[inputFieldValue.name] })}
                  />
                </Box>
              ))}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ marginTop: '20px', backgroundColor: '#5f6d45', color: 'white' }}
                disabled={!formIsValid()}
              >
                Send Message
              </Button>
            </form>
          </Container>
        </div>
        </>
      );  
}