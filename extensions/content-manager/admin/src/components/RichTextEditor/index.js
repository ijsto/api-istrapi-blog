import React from 'react';
import Dante from 'Dante2';

import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const RichTextEditor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
      <Dante
        body_placeholder="ba na na na n aa, value"
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
      />
    </Wrapper>
  );
};

export default RichTextEditor;
