import React, { useState, useMemo } from 'react'

const fibonacci = n => {
  if (n <= 1) {
    return 1
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

const Memo = () => {
  const [num, setNum] = useState(20)
  const [isGreen, setIsGreen] = useState(true)
  //   returns a memoized value
  const fib = useMemo(() => fibonacci(num), [num])

  return (
    <div>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? 'limegreen' : 'crimson' }}
      >
        useMemo Example
      </h1>
      <h2>
        Fibonacci of {num} is {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
    </div>
  )
}

export default Memo
