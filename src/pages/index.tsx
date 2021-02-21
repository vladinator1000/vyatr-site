import React from 'react'
import Subscribe from '../components/Subscribe'

import { Content } from '../content/Content'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const About = () => (
  <Main meta={<Meta title="Vyatr" description="Games" />}>
    <Content>
      <section className="p-2 rounded bg-gray-100 mb-3">
        <h1>
          <b>🌳 Trees</b>
        </h1>
        <p>Bring winter onto the world.</p>
      </section>
      <Subscribe />
    </Content>
  </Main>
)

export default About
