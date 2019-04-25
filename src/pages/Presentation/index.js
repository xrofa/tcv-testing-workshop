import React from 'react'
import logo from '../../assets/images/tcv.jpg'
import { theme } from './styles'
import {
  BlockQuote,
  Deck,
  Heading,
  Quote,
  Slide,
  Text,
  Appear,
  Link,
  CodePane,
  Code
} from 'spectacle'

import styled from 'styled-components'

const Spacer = styled.div`
  margin: 20px 0;
`

const TCV = styled.img`
  width: 2em
  height: 2em;
  position: absolute;
  z-index: 1;
  margin-top: 10px;
  margin-left: 20px;
  cursor: pointer;
`

const Presentation = ({ history }) => {
  const showLogo =
    window.location.hash === '#/' || window.location.hash === '#/0'
  return (
    <React.Fragment>
      {showLogo && <TCV src={logo} onClick={() => history.push('/')} />}
      <Deck
        progress='bar'
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor='primary'>
          <Heading size={1} fit caps lineHeight={1} textColor='secondary'>
            Testing Practices and Principles
          </Heading>
          <Appear>
            <Spacer>
              <Link
                href='http://www.thecodeventure.com'
                target='_blank'
                textColor='tertiary'
                bold
              >
                wwww.thecodeventure.com
              </Link>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Types of testing
          </Heading>
          <Heading size={1} textColor='secondary'>
            Integration
          </Heading>
          <Heading size={2} textColor='secondary'>
            End-to-End
          </Heading>
          <Heading size={3} textColor='secondary'>
            Performance
          </Heading>
          <Heading size={4} textColor='secondary'>
            Penetration
          </Heading>
          <Heading size={5} textColor='secondary'>
            Regretion
          </Heading>
          <Heading size={5} textColor='secondary'>
            Stress
          </Heading>
          <Heading size={5} textColor='secondary'>
            I18n
          </Heading>
          <Heading size={5} textColor='secondary'>
            Unit
          </Heading>
          <Text size={6} textColor='secondary'>
            ...
          </Text>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Unit testing
          </Heading>
          <Appear>
            <Spacer>
              <CodePane
                textSize={24}
                lang='jsx'
                source={`const sum = (a, b) => a + b\n\ntest('sum adds numbers ', () => {\n\texpect(sum(1, 3)).toBe(4)\n})`}
              />
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            End-to-End Testing
          </Heading>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Run all application from one point to another
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Test all parts of the application
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                As close to a user as possible
              </Text>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Integration Testing
          </Heading>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Starts the server with a database
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Hit the endpoint
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Wait for the result
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Check the result
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Can be used with UI also, by mocking the server
              </Text>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Let's build our testing framework
          </Heading>
          <Appear>
            <Spacer>
              <CodePane
                textSize={24}
                lang='jsx'
                source={`const expect = (actual) => {\n\treturn toBe (expected) {\n\t\tif (actual !== expected)\n\t\t\tthrow new Error('actual is different than expected')\n\t}\n}`}
              />
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Test Frameworks (Jest)
          </Heading>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                An assertion framework helps you test your code
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Show clearly what is testing
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Show clearly what is the error on the test
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Throw useful errors
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                A good test is the one that helps you find the error
              </Text>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Jest Assertions
          </Heading>
          <Heading size={1} textColor='secondary'>
            toBe
          </Heading>
          <Heading size={2} textColor='secondary'>
            toEqual
          </Heading>
          <Heading size={3} textColor='secondary'>
            toMatchObject
          </Heading>
          <Heading size={4} textColor='secondary'>
            toHaveBeenCalledTimes
          </Heading>
          <Heading size={5} textColor='secondary'>
            toHaveBeenCalledWith
          </Heading>
          <Heading size={5} textColor='secondary'>
            toBeGreaterThan
          </Heading>
          <Heading size={5} textColor='secondary'>
            toBeTruthy
          </Heading>
          <Heading size={5} textColor='secondary'>
            toBeFalsy
          </Heading>
          <Appear>
            <Link
              href='https://jestjs.io/docs/en/expect'
              target='_blank'
              textColor='tertiary'
            >
              ...more here
            </Link>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Schema Comparison
          </Heading>
          <Appear>
            <Spacer>
              <CodePane
                textSize={24}
                lang='jsx'
                source={`test('Matches the schema', () => {\n\n\tconst presenter = {\n\t\tfirstName: 'Pedro',\n\t\tlastName: 'Lopes',\n\t\tage: 26,\n\t\temail: 'pedro.lopes@thecodeventure.com'\n\t}\n\n\tconst schema = {\n\t\tfirstName: expect.any(String),\n\t\tlastName: expect.any(String),\n\t\tage: expect.any(Number),\n\t\temail: expect.stringContaining('thecodeventure.com')\n\t}\n\n\texpect(presenter).toEqual(schema)\n\n})`}
              />
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Jest
          </Heading>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Watch mode is where everything happens
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Tests run in parallel
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                One assertion per test is the recommendation
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Multiple assertions are ok with a framework that provide good
                error messages
              </Text>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Writing Unit Tests
          </Heading>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                How would a user use this?
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Assure that tests are really running
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='tertiary'>
                How?
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <div>
              <Spacer>
                <Text size={6} textColor='secondary'>
                  Negating the assertion
                </Text>
              </Spacer>
              <Spacer>
                <Text size={6} textColor='secondary'>
                  ...or...
                </Text>
              </Spacer>
            </div>
          </Appear>
          <Appear>
            <Spacer>
              <Code textColor='secondary'>expect.assertions(n)</Code>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Test Factories
          </Heading>
          <Appear>
            <Spacer>
              <CodePane
                textSize={24}
                lang='jsx'
                source={`describe('Are these passwords allowed', () => {\n\n\tconst allowedPasswords = ['abc.1234.abc', '1abcab1', '12312ab']\n\n\tallowedPasswords.forEach(password => {\n\t\ttest(\`"\${password}" should be allowed\`, () => {\n\t\t\tconst isAllowed = isPasswordAllowed(password)\n\t\t\texpect(isAllowed).toEqual(true)\n\t\t})\n\t})\n})`}
              />
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Test Driven Development (TDD)
          </Heading>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Write a test that defines a function or improvement
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Run the tests and see if some fail
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Write the code to pass the new test
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Re-run the tests
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='secondary'>
                Refactor/Test code to a cleaner state
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='tertiary'>
                Good for pure functions and backend features
              </Text>
            </Spacer>
          </Appear>
          <Appear>
            <Spacer>
              <Text size={6} textColor='tertiary'>
                Not really useful for building UI
              </Text>
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='primary'>
          <Heading size={6} textColor='tertiary' caps>
            Mocks
          </Heading>
          <Appear>
            <Spacer>
              <CodePane
                textSize={24}
                lang='jsx'
                source={`import * as utilsMock from '../utils'\nimport capitalizeUserAttributes from '../utils/capitalizeUserAttributes'\n\njest.mock('../utils', () => {\n\treturn {\n\t\tcapitalizeString: jest.fn(string => string)\n\t}\n})`}
              />
            </Spacer>
          </Appear>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <BlockQuote>
            <Quote>
              As ironic as it seems, the challenge of a tester is to test as
              little as possible. Test less, but test smarter
            </Quote>
          </BlockQuote>
        </Slide>

        <Slide transition={['fade']} bgColor='secondary' textColor='primary'>
          <Heading>Thank you!</Heading>
        </Slide>
      </Deck>
    </React.Fragment>
  )
}

export default Presentation
