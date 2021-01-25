import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Vyatr" description="Games" />}>
    <Content>
      <section>
        <h1>
          <b>Trees</b>
        </h1>
        <p>Bring winter onto the world.</p>
      </section>
    </Content>
  </Main>
);

export default About;
