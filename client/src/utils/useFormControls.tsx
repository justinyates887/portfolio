import React from "react";
import { useState } from "react";
import { postMailer } from './axios'

const initialFormValues = {
    fullName: "",
    email: "",
    message:"",
    formSubmitted: false,
    success: false
}
  
export const useFormControls = () => {

    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);

    const validate: any = (fieldValues = values) => {
        let temp: any = { ...errors }
    
        if ("fullName" in fieldValues)
          temp.fullName = fieldValues.fullName ? "" : "This field is required."
    
        if ("email" in fieldValues) {
          temp.email = fieldValues.email ? "" : "This field is required."
          if (fieldValues.email)
            temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
              ? ""
              : "Email is not valid."
        }
    
        if ("message" in fieldValues)
          temp.message =
            fieldValues.message ? "" : "This field is required."
    
        setErrors({
          ...temp
        });
      }
    const handleInputValue = (e: any) => {
        const { name, value } = e.target;
        setValues({
          ...values,
          [name]: value
        });
        validate({ [name]: value });
      };
      const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        if (formIsValid()) {
          try {
            const response = await postMailer(values);
            if (response === 200) {
              console.log("Response: " + response);
              alert("Contact sent!");
            } else {
              alert("Something went wrong");
            }
          } catch (error) {
            console.error("Error:", error);
            alert("An error occurred");
          }
        }
      };      
    const formIsValid = (fieldValues = values) => {
        const isValid =
          fieldValues.fullName &&
          fieldValues.email &&
          fieldValues.message &&
          Object.values(errors).every((x) => x === "");
    
        return isValid;
      };
   return {
      handleInputValue,
      handleFormSubmit,
      formIsValid,
      errors,
      values
    };
  }