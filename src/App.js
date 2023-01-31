import React from 'react'

import './App.scss'
import { useNodes } from './ui/hooks'
import StatsContainer from './StatsContainer'
import NodeContainer from './NodeContainer'
import BlockContainer from './BlockContainer'
import MempoolContainer from './MempoolContainer'

const App = () => {
  const { nodes, blocks, balances, mempool } = useNodes()

  return (
    <div className="js-bitcoin-container">
      <h2>Bitcoin Copy Cat Network</h2>
      <StatsContainer blocks={blocks} />
      <div className="main-content">
        <BlockContainer blocks={blocks} />
        <MempoolContainer mempool={mempool} />
        <NodeContainer nodes={nodes} balances={balances} blocks={blocks} />
      </div>
    </div>
  )
}

export default App
