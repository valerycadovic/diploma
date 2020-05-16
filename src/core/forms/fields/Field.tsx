/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC, useContext, useState, ChangeEvent } from 'react';
import { FormContext } from '../Form';
import ReactMde from 'react-mde';
import ReactMarkdown from 'react-markdown';

interface Props {
  name: string;
  label?: string;
  type?: 'Tags' | 'Markdown' | 'Text' | 'TextArea' | 'Checkbox';
}

export const Field: FC<Props> = ({ name, label, type }) => {
  const { setValue, touched, setTouched, validate } = useContext(FormContext);

  const [markdownTab, setMarkdownTab] = useState<'write' | 'preview'>('write');

  const handleChange = (value: string) => {
    if (setValue) {
      setValue(name, value);
    }
    if (touched[name] && validate) {
      validate(name);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    handleChange(e.currentTarget.value);
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleChange(e.currentTarget.checked.toString());
  };

  const handleBlur = () => {
    if (setTouched) {
      setTouched(name);
    }
    if (validate) {
      validate(name);
    }
  };

  return (
    <FormContext.Consumer>
      {({ values, errors }) => (
        <div
          css={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            margin: 10px;
          `}
        >
          {label && (
            <label
              css={css`
                flex: 1;
              `}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          {type === 'Markdown' && (
            <div
              css={css`
                flex: 1;
              `}
              onBlur={handleBlur}
            >
              <ReactMde
                value={values[name] === undefined ? '' : values[name]}
                onChange={handleChange}
                selectedTab={markdownTab}
                onTabChange={setMarkdownTab}
                generateMarkdownPreview={(markdown) =>
                  Promise.resolve(<div>{<ReactMarkdown source={markdown} escapeHtml={false} />}</div>)
                }
              />
            </div>
          )}
          {type === 'Text' && (
            <input
              type={type.toLowerCase()}
              id={name}
              value={values[name] === undefined ? '' : values[name]}
              onChange={handleInputChange}
              onBlur={handleBlur}
            />
          )}
          {type === 'Checkbox' && (
            <input
              type={type.toLowerCase()}
              id={name}
              value={values[name] === undefined ? '' : values[name]}
              onChange={handleCheckboxChange}
            />
          )}
          {errors[name] &&
            errors[name].length > 0 &&
            errors[name].map((error) => (
              <div
                key={error}
                css={css`
                  font-size: 12px;
                  color: red;
                `}
              >
                {error}
              </div>
            ))}
        </div>
      )}
    </FormContext.Consumer>
  );
};
