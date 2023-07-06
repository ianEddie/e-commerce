
import { useState } from 'react'
//
export function useToggle () {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return { toggle, handleToggle }
}
