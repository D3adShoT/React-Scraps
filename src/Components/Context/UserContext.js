import React from 'react';
const UserContext = React.createContext('Hellilu') // default value of Context
const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider , UserConsumer}