import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Press" description="Press kit" />}>
    <Content>
      <section>
        <h1>
          <b>The Studio</b>
        </h1>
        <p>
          A small team of passsionate developers working in their spare time after their full-time
          jobs, prototyping their dream games.
        </p>
      </section>
    </Content>
  </Main>
);

export default About;
