import React, { useState, useContext, createContext } from 'react'

const UserContext = createContext([
  {
    firstName: 'Aditya',
    lastName: 'Sharma',
    suffix: 1,
    email: 'sharmaaditya570191@gmail.com'
  },
  () => {}
])

const LevelFive = () => {
  const [user, setUser] = useContext(UserContext)

  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} loves ${user.suffix}`}</h5>
      <button
        onClick={() =>
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }))
        }
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (user.suffix >= 2) {
            setUser(Object.assign({}, user, { suffix: user.suffix - 1 }))
          } else {
            window.alert(
              `Aditya Sharma loves at least 1. Contact at ${user.email} to decrement further.`
            )
          }
        }}
      >
        Decrement
      </button>
    </div>
  )
}

const LevelFour = () => {
  return (
    <div>
      <h4>fourth level</h4>
      <LevelFive />
    </div>
  )
}

const LevelThree = () => {
  return (
    <div>
      <h3>third level</h3>
      <LevelFour />
    </div>
  )
}

const LevelTwo = () => {
  return (
    <div>
      <h2>second level</h2>
      <LevelThree />
    </div>
  )
}

const Context = () => {
  const userState = useState({
    firstName: 'Aditya',
    lastName: 'Sharma',
    suffix: 1,
    email: 'sharmaaditya570191@gmail.com'
  })

  return (
    <UserContext.Provider value={userState}>
      <h1>first level</h1>
      <LevelTwo />
    </UserContext.Provider>
  )
}

export default Context
