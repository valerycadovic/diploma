/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { FC } from 'react';
import { Form } from '../core/forms/Form';
import { Field } from '../core/forms/fields/Field';
import { required, minLength, maxLength } from '../core/forms/validation/Validation';

export const NewsForm: FC = () => {
  return (
    <Form
      onSubmit={() => {}}
      failureMessage="There was a problem with your post"
      successMessage="Your post was successfully submitted"
      submitCaption="Submit"
      validationRules={{
        header: [{ validator: required }, { validator: minLength, arg: 20 }, { validator: maxLength, arg: 80 }],
        listViewContent: [
          { validator: required },
          { validator: minLength, arg: 20 },
          { validator: maxLength, arg: 150 },
        ],
        detailedViewContent: [{ validator: required }, { validator: minLength, arg: 100 }],
      }}
    >
      <Field name="header" label="Header" type="Text" />
      <Field name="listViewContent" label="List View Content" type="Text" />
      <Field name="detailedViewContent" label="Detailed View Content" type="Markdown" />
    </Form>
  );
};
