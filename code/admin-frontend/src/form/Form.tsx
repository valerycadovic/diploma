/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import 'react-mde/lib/styles/css/react-mde-all.css';
import { FC, createContext, useState, FormEvent } from 'react';
import { Validator } from './Validation';

export interface Values {
  [key: string]: any;
}

export interface Errors {
  [key: string]: string[];
}

export interface Touched {
  [key: string]: boolean;
}

export interface SubmitResult {
  success: boolean;
  errors?: Errors;
}

interface FormContextProps {
  values: Values;
  setValue?: (fieldName: string, value: any) => void;
  errors: Errors;
  validate?: (fieldName: string) => void;
  touched: Touched;
  setTouched?: (fieldName: string) => void;
}

export const FormContext = createContext<FormContextProps>({ values: {}, errors: {}, touched: {} });

interface Validation {
  validator: Validator;
  arg?: any;
}

interface ValidationProp {
  [key: string]: Validation | Validation[];
}

interface Props {
  submitCaption?: string;
  validationRules?: ValidationProp;
  onSubmit: (values: Values) => Promise<SubmitResult> | void;
  submitResult?: SubmitResult;
  successMessage?: string;
  failureMessage?: string;
}

export const Form: FC<Props> = ({
  submitCaption,
  children,
  validationRules,
  onSubmit,
  submitResult,
  successMessage,
  failureMessage,
}) => {
  const [values, setValues] = useState<Values>({});
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Touched>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = (fieldName: string): string[] => {
    if (!validationRules) {
      return [];
    }
    if (!validationRules[fieldName]) {
      return [];
    }

    const rules = Array.isArray(validationRules[fieldName])
      ? (validationRules[fieldName] as Validation[])
      : ([validationRules[fieldName]] as Validation[]);

    const fieldErrors: string[] = [];

    rules.forEach((rule) => {
      const error = rule.validator(values[fieldName], rule.arg);
      if (error) {
        fieldErrors.push(error);
      }
    });

    const newErrors = { ...errors, [fieldName]: fieldErrors };
    setErrors(newErrors);

    return fieldErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      setSubmitError(false);

      const result = await onSubmit(values);

      if (result === undefined) {
        return;
      }

      setErrors(result.errors || {});
      setSubmitError(!result.success);

      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const validateForm = () => {
    const newErrors: Errors = {};
    let haveError: boolean = false;

    if (validationRules) {
      Object.keys(validationRules).forEach((fieldName) => {
        newErrors[fieldName] = validate(fieldName);
        if (newErrors[fieldName].length > 0) {
          haveError = true;
        }
      });
    }

    setErrors(newErrors);
    return !haveError;
  };

  const disabled = submitResult ? submitResult.success : submitting || (submitted && !submitError);
  const showError = submitResult ? !submitResult.success : submitted && submitError;
  const showSuccess = submitResult ? submitResult.success : submitted && !submitError;

  return (
    <FormContext.Provider
      value={{
        values,
        setValue: (fieldName: string, value: any) => {
          setValues({ ...values, [fieldName]: value });
        },
        errors,
        validate,
        touched,
        setTouched: (fieldName: string) => {
          setTouched({ ...touched, [fieldName]: true });
        },
      }}
    >
      <form noValidate={true} onSubmit={handleSubmit}>
        <fieldset
          disabled={disabled}
          css={css`
            display: flex;
            flex-direction: column;
            padding: 30px;
            box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 16);
            background-color: white;
          `}
        >
          {children}
          <div
            css={css`
              display: flex;
              flex-direction: row;
            `}
          ></div>
          <div
            css={css`
              margin: 30px 0px 0px 0px;
              padding: 20px 0px 0px 0px;
              flex: 1;
            `}
          >
            <button type="submit">{submitCaption}</button>
          </div>
          {showError && (
            <p
              css={css`
                color: red;
                flex: 1;
              `}
            >
              {failureMessage}
            </p>
          )}
          {showSuccess && (
            <p
              css={css`
                color: green;
                flex: 1;
              `}
            >
              {successMessage}
            </p>
          )}
        </fieldset>
      </form>
    </FormContext.Provider>
  );
};
