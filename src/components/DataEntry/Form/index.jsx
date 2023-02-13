import React, { useState } from "react";
import propTypes from "prop-types";
import Text from "./Text";
import Email from "./Email";
import Password from "./Password";
import Number from "./Number";
import Select from "./Select";

const Form = (props) => {
  const [errorState, setErrorState] = useState(false);
  const resetFormStyles = (input) => {
    input.classList.remove("border-red-500");
    input.nextSibling.classList.remove("bg-red-500");
    input.nextSibling.nextElementSibling.classList.remove("text-red-500");
    input.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =
      "";
  };
  const updateFormErrorState = (input, errorMessage) => {
    input.classList.add("border-red-500");
    input.nextElementSibling.classList.add("bg-red-500");
    input.nextElementSibling.nextElementSibling.classList.add("text-red-500");
    input.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML =
      errorMessage;
  };
  const getFormValues = (form) => {
    let getInputs = {};
    let getSelected = {};
    let getTextArea = {};
    const getFormRef = new FormData(form);
    console.log(getFormRef);
    form.querySelectorAll("input").forEach((item) => {
      getInputs = { ...getInputs, [item.name]: item.value };
    });
    form.querySelectorAll("select").forEach((item) => {
      getSelected = { ...getSelected, [item.name]: item.value };
    });
    form.querySelectorAll("textarea").forEach((item) => {
      getTextArea = { ...getTextArea, [item.name]: item.value };
    });
    return { ...getInputs, ...getTextArea, ...getSelected };
  };
  const validate = async (formValues, form) => {
    try {
      const validatedForm = await props.validator.validateAsync(formValues);
      props.onSubmit(formValues);
      setErrorState(false);
    } catch (error) {
      console.log(error.details);
      setErrorState(true);
      const errorContext = error.details[0];
      const { path } = errorContext;
      path.forEach((item) => {
        updateFormErrorState(form[item], error.details[0].message);
      });
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formValues = getFormValues(form);
    if (errorState) {
      Object.keys(formValues).forEach((item) => {
        resetFormStyles(form[item]);
      });
    }
    if (props.validator) {
      validate(formValues, form);
      return;
    }
    props.onSubmit(formValues);
  };

  return (
    <form
      className={props.styles}
      onSubmit={onSubmit}
      onChange={props.onChange}
    >
      {props.children}
    </form>
  );
};

Form.defaultProps = {
  onSubmit: (e) => null,
  onChange: (e) => null,
  styles: "",
};
Form.propTypes = {
  onSubmit: propTypes.func,
  onChange: propTypes.func,
  styles: propTypes.string,
  validator: propTypes.object,
};

Form.Text = Text;
Form.Email = Email;
Form.Password = Password;
Form.Number = Number;
Form.Select = Select;

export default Form;
