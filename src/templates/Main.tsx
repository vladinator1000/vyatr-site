import React, { ReactNode } from 'react'

import Link from 'next/link'

import { Navbar } from '../navigation/Navbar'
import { Config } from '../utils/Config'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-semibold text-3xl text-gray-900">
            {Config.title}
          </div>
          <div className="text-xl">{Config.description}</div>
        </div>
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a>Games</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/blog/">
                <a>Blog</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/press/">
                <a>Press</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>
    </div>
  </div>
)

export { Main }
