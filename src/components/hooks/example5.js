// useContext和useReducer实现类似Redux的效果

import React from 'react'
import {Color} from './color'
import Show from './show'
import Buttons from './buttons'
function Example5() {
    return (
        <div>
            <Color>
                <Show></Show>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}

export default Example5