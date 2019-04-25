import React from 'react'

import logo from '../../assets/images/tcv.jpg'

import {
  Container,
  Header,
  Image,
  AuthorsSection,
  UserLink,
  SiteLink,
  PresentationLink
} from './styles'

const HomePage = ({ history }) => {
  return (
    <Container>
      <Header>
        <Image src={logo} alt='logo' />
        <PresentationLink onClick={() => history.push('presentation')}>
          <h1>Testing Practices and Principles</h1>
        </PresentationLink>
        <p>
          Please run the project with <code>npm run test</code>
        </p>

        <AuthorsSection>
          <UserLink
            href='https://github.com/PMiraLopes'
            target='_blank'
            rel='noopener noreferrer'
          >
            Pedro Lopes - pedro.lopes@thecodeventure.com
          </UserLink>
          <UserLink
            href='https://github.com/xrofa'
            target='_blank'
            rel='noopener noreferrer'
          >
            Christian Sousa - christian.sousa@thecodeventure.com
          </UserLink>
        </AuthorsSection>

        <SiteLink
          href='https://www.thecodeventure.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <code>www.thecodeventure.com</code>
        </SiteLink>
      </Header>
    </Container>
  )
}

export default HomePage
