'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const SearchBox = () => {
    const [isInput, setIsInput] = useState("")
    const router = useRouter()
    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!isInput) return;
        router.push(`/search?term=${isInput}`)
    }
  return (
    <form onSubmit={handleSearch} className='max-w-6xl mx-auto flex justify-between items-center px-5'>
      <input type="text" value={isInput} onChange={(e)=> setIsInput(e.target.value)}
      placeholder="Search Keywords..." className="w-full h-14 rounded-sm placeholder-gray-500 text-gray-500 outline-none flex-1 bg-transparent dark:text-orange-400"/>
      <button disabled={!isInput} type='submit' className="text-orange-400 disabled:text-gray-400">Search</button>
    </form>
  )
}

export default SearchBox
