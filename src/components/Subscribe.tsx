import React, { DOMAttributes, ReactElement, useState } from 'react'

function Subscribe(): ReactElement {
  const [didSubscribe, setDidSubscribe] = useState(false)
  const [error, setError] = useState('')
  const onSubmit: DOMAttributes<HTMLFormElement>['onSubmit'] = async (
    event,
  ) => {
    event.preventDefault()

    const data = new FormData(event.target as HTMLFormElement)

    const res = await fetch('/.netlify/functions/subscribe', {
      method: 'POST',
      body: JSON.stringify({
        email: data.get('email'),
      }),
    }).then(res => res.json())

    const {error} = res

    if (!error) {
      setDidSubscribe(true)
    } else {
      setError(error)
    }
  }

  if (didSubscribe) {
    return <span>Thanks! Please check your email to confirm your subscription.</span>
  }

  return (
    <form
      className="grid grid-flow-row auto-rows-max space-y-1 p-2 rounded bg-blue-100"
      action="/.netlify/functions/subscribe"
      method="post"
      onSubmit={onSubmit}
    >
      <label className="">✉ Mailing List</label>
      <span className="text-base">
        Get a free game and news about our unreleased projects 👀
      </span>

      {error && <span className="text-base text-red-500">{error}</span>}
      <input
        className="p-1 rounded"
        placeholder="your@email.com"
        id="email"
        name="email"
        type="email"
      />
      <input className="p-1 rounded" type="submit" value="Sign up" />
    </form>
  )
}

export default Subscribe
