import React from 'react'

function EmailBox() {
  return (
    <div className="mx-auto  flex   w-[512px] items-center justify-center overflow-hidden rounded-xl bg-white ring-[1px] ring-blue-600">
      <input
        type="email"
        placeholder="email@example.com"
        className="flex h-full w-[289px] px-5  py-3 text-lg outline-none   "
      />
      <button className=" h-full w-[223px] bg-blue-600 py-3 text-[22px] font-medium text-white      ">
        Get Early Access
      </button>
    </div>
  )
}

export default EmailBox
