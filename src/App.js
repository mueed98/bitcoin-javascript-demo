import React from 'react'

import './App.scss'
import { useNodes } from './ui/hooks'
import StatsContainer from './StatsContainer'
import NodeContainer from './NodeContainer'
import BlockContainer from './BlockContainer'
import MempoolContainer from './MempoolContainer'

const App = () => {
  const { nodes, blocks, balances, mempool, blockOfBlocks } = useNodes()

  return (
    <div className="js-bitcoin-container">
      <h1>Bitcoin Copy Cat Network</h1>
      <StatsContainer blocks={blockOfBlocks} />
      {/* <h3>Latest 5 blocks</h3> */}
      <div className="main-content">
        <BlockContainer blocks={blocks} />
        <MempoolContainer mempool={mempool} />
        <NodeContainer
          nodes={nodes}
          balances={balances}
          blocks={blockOfBlocks}
        />
      </div>
    </div>
  )
}

export default App
