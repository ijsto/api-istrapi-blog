/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';
import { defineMessages } from 'react-intl';
import { PropTypes } from 'prop-types';

import LeftMenuLink from '../LeftMenuLink';

import Wrapper from './Wrapper';

import messages from './messages.json';

defineMessages(messages);

function LeftMenuFooter({ version, ...rest }) {
  const staticLinks = [
    {
      icon: 'book',
      label: 'documentation',
      destination: 'https://strapi.io/documentation'
    },
    {
      icon: 'question-circle',
      label: 'help',
      destination: 'https://strapi.io/help'
    }
  ];

  return (
    <Wrapper>
      <ul className="list">
        {staticLinks.map(link => (
          <LeftMenuLink
            {...rest}
            {...link}
            label={messages[link.label].id}
            key={link.label}
          />
        ))}
      </ul>
      <div className="poweredBy">
        With{' '}
        <a
          key="website"
          href="https://strapi.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Strapi
        </a>{' '}
        by{' '}
        <a href="https://ijs.to" target="_blank" rel="noopener noreferrer">
          iJS
        </a>
      </div>
    </Wrapper>
  );
}

LeftMenuFooter.propTypes = {
  version: PropTypes.string.isRequired
};

export default LeftMenuFooter;
