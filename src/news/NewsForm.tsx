/** @jsx jsx */
import { jsx } from '@emotion/core';
import { FC } from 'react';
import { Form, Values } from '../core/forms/Form';
import { Field } from '../core/forms/fields/Field';
import { required, minLength, maxLength } from '../core/forms/validation/Validation';
import { postNews } from './NewsGridItemData';

export const NewsForm: FC = () => {
  const handleSubmit = async (values: Values) => {
    const result = await postNews({
      created: new Date(),
      detailedViewContent: values.detailedViewContent,
      header: values.header,
      image: values.image,
      listViewContent: values.listViewContent,
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
