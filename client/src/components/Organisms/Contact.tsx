import { Typography, TextField, Button } from "@mui/material";
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
        color: "white"
      };

      return (
        <>
          <Navbar />
          <div className="centered-container">
            <Typography variant="h3" component="div" sx={{ color: "white", margin: "20px" }}>
                Contact
            </Typography>
              <form onSubmit={handleFormSubmit} style={{width: "60%"}}>
                {inputFieldValues.map((inputFieldValue, index) => {
                  return (
                    <div key={index} style={{ marginBottom: '15px'}}>
                      <TextField
                        sx={{ width: "100%", backgroundColor: "#353535", borderRadius: '20px'}}
                        id={inputFieldValue.name}
                        name={inputFieldValue.name}
                        label={!values[inputFieldValue.name] ? inputFieldValue.label + "*" : ""}
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
                    </div>
                  );
                })}
                <Button
                  type="submit"
                  disabled={!formIsValid()}
                  style={{ marginTop: '20px', color: "#5f6d45" }}
                >
                  Send Message
                </Button>
              </form>
          </div>
        </>
      );      
}