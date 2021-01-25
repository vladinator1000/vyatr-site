import React, { ReactElement } from 'react'


function MailingList(): ReactElement {
  return (
    <form className="grid grid-flow-row auto-rows-max space-y-1 p-2 rounded bg-blue-100">
      <label className="">✉ Mailing List</label>
      <span className="text-base">Get a free game and news about our unreleased projects 👀</span>
      <input className="p-1 rounded" placeholder="your@email.com" />
      <input className="p-1 rounded" type="submit" value="Sign up" />
    </form>
  )
}

export default MailingList
