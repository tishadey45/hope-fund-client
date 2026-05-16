"use client";

import * as React from "react";
import { Controller, FormProvider } from "react-hook-form";

const Form = FormProvider;

const FormFieldContext = React.createContext({});

const FormField = ({ ...props }) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const FormControl = React.forwardRef(({ ...props }, ref) => {
  return <input ref={ref} {...props} />;
});

FormControl.displayName = "FormControl";

export { Form, FormField, FormControl };