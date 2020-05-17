/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Values, Form } from '../form/Form';
import { required, minLength, maxLength } from '../form/Validation';
import { Field } from '../form/Field';
import { postNews } from './NewsFormData';

export const NewsForm: FC = () => {
  const handleSubmit = async (values: Values) => {
    const result = await postNews({
      image: values.image,
      header: values.header,
      listViewContent: values.listViewContent,
      detailedViewContent: values.detailedViewContent,
      isUrgent: values.isUrgent,
      tags: values.tags,
    });

    return { success: !!result };
  };

  return (
    <Form
      onSubmit={handleSubmit}
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
        image: [{ validator: required }],
        detailedViewContent: [{ validator: required }, { validator: minLength, arg: 100 }],
      }}
    >
      <Field name="header" label="Header" type="Text" />
      <Field name="listViewContent" label="List View Content" type="Text" />
      <Field name="image" label="Heared Image URL" type="Text" />
      <Field name="detailedViewContent" label="Detailed View Content" type="Markdown" />
      <Field name="isUrgent" label="Is Urgent?" type="Checkbox" />
      <Field name="tags" label="Select tags for the post" type="Tags" />
    </Form>
  );
};
