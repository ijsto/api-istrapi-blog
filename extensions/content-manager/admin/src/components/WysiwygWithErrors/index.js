/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { isEmpty } from 'lodash';
import { Label, InputDescription, InputErrors } from 'strapi-helper-plugin';
import RichTextEditor from '../RichTextEditor';

const WysiwygWithErrors = ({
  inputDescription,
  errors,
  label,
  name,
  noErrorsDescription,
  onChange,
  value
}) => {
  let spacer = !isEmpty(inputDescription) ? (
    <div style={{ height: '.4rem' }} />
  ) : (
    <div />
  );

  if (!noErrorsDescription && !isEmpty(errors)) {
    spacer = <div />;
  }

  return (
    <div
      className="col-12"
      style={{
        marginBottom: '1.6rem',
        fontSize: '1.3rem',
        fontFamily: 'Lato'
      }}
    >
      <Label htmlFor={name} message={label} style={{ marginBottom: 10 }} />
      <RichTextEditor name={name} onChange={onChange} value={value} />
      <InputDescription
        message={inputDescription}
        style={!isEmpty(inputDescription) ? { marginTop: '1.4rem' } : {}}
      />
      <InputErrors
        errors={(!noErrorsDescription && errors) || []}
        name={name}
      />
      {spacer}
    </div>
  );
};

export default WysiwygWithErrors;
