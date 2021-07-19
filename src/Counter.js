import { observer } from 'mobx-react-lite'
import React from 'react'
import './Counter.css'
import counter from './store/counter'

function Counter() {
    return (
        <div className='counter'>
            {"total = " + counter.total}
            <hr/>
            {"count = " + counter.count}
            <div>
                <button onClick={()=>counter.inc()}>+</button>
                <button onClick={()=>counter.dec()}>-</button>
            </div>
        </div>
    )
}

export default observer(Counter)
