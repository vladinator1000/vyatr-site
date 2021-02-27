import React from 'react'
import Subscribe from '../components/Subscribe'

import { Content } from '../content/Content'
import { Meta } from '../layout/Meta'
import { Main } from '../templates/Main'

const About = () => (
  <Main meta={<Meta title="Vyatr" description="Games" />}>
    <Content>
      <section className="p-2 rounded mb-3 bg-green-50">
        <h1>
          <b>🌳 Trees</b>
        </h1>
        <p>This is our first game! ❄You're a magic snowball that brings winter onto the world. If you'd like to play it, please subscribe to our newsletter below.</p>
      </section>
      <Subscribe />
    </Content>
  </Main>
)

export default About
