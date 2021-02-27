import React from 'react'

import { Content } from '../content/Content'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const ConfirmSubscription = () => (
  <Main meta={<Meta title="Press" description="Press kit" />}>
    <Content>
      <section>
        <h1>
          <b>Thank you for signing up</b>
        </h1>
        <p>
          Please accept this free copy of our first game as a token of our gratitude.
        </p>

        <a href="https://cdn.vyatr.com/distributables/Trees.zip">🌳 Download Trees</a>
      </section>
    </Content>
  </Main>
)

export default ConfirmSubscription
