/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import { get, upperFirst } from 'lodash';
import { auth } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';


import {
  ALink,
  Block,
  Container,
  LinkWrapper,
  P,
  Wave,
  Separator,
} from './components';

import SocialLink from './SocialLink';


const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    link: 'https://github.com/ijsto/',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/ijstodev',
  },
];

const HomePage = ({ global: { plugins }, history: { push } }) => {

  const hasAlreadyCreatedContentTypes =
    get(
      plugins,
      ['content-manager', 'leftMenuSections', '0', 'links'],
      []
    ).filter(contentType => contentType.isDisplayed === true).length > 1;

  const headerId = hasAlreadyCreatedContentTypes
    ? 'HomePage.greetings'
    : 'app.components.HomePage.welcome';
  const username = get(auth.getUserInfo(), 'username', '');
  

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <Block>
              <Wave />

                <h2>
                  {upperFirst(username)}
                </h2>                

                <div>
                  <p>
                    Congrats on getting started with iStrapi by iJS.
                  </p>
                  <p>
                    This is a Strapi starter project by{" "}
                    <a
                      rel="noopener noreferrer"
                      href="https://ijs.to"
                      target="_blank">
                      iJS
                    </a>
                  </p>
                </div>

             
              <Separator style={{ marginTop: 37, marginBottom: 36 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
               Footer />
              </div>
            </Block>
          </div>

          <div className="col-4">
            <Block style={{ paddingRight: 30, paddingBottom: 0 }}>
              <FormattedMessage id="HomePage.community">
                {msg => <h2>{msg}</h2>}
              </FormattedMessage>
              <div>
                Learn how to build real-world applications with React, GraphQL, Node and more
              </div>

              <div>
                <ALink
                  rel="noopener noreferrer"
                  href="https://ijs.to"
                  target="_blank"
                  >
                  Check out courses
                </ALink>
              </div>

              <Separator style={{ marginTop: 18 }} />
              <div
                className="row social-wrapper"
                style={{
                  display: 'flex',
                  margin: 0,
                  marginTop: 36,
                  marginLeft: -15,
                }}
              >
                {SOCIAL_LINKS.map((value, key) => (
                  <SocialLink key={key} {...value} />
                ))}
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
