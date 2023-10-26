import React from "react";
import { useState } from "react";

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
          //await postContactForm(values);
          alert("Contact sent!")
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