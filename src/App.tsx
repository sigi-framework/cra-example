import React from 'react'
import { useModule } from '@sigi/react'

import { AppModule } from './app.module'

function App() {
  const [state, dispatcher] = useModule(AppModule)
  const click = React.useCallback(() => dispatcher.do(), [dispatcher])
  return (
    <div className="App">
      {state.count}
      <button onClick={click}>add</button>
    </div>
  )
}

export default App
