import React from 'react'

export default function searchbar() {
  return (
    <div className='flex justify-center mt-10'>
      <div className="relative">
          <input 
            autoComplete="off"
            id="search"
            name="search" 
            type="search" 
            placeholder={`Search Products`} 
            className="py-2 bg-gray-100 text-sm text-white rounded-md pl-10 focus:outline-none focus:text-gray-900" 
          />
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <button type="button" className="p-1 focus:outline-none focus:shadow-outline">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-5 h-5"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </button>
          </span>
      </div>
    </div>
  )
}
