// useRef的应用
import React, { useRef} from 'react';
function Example7() {
    const inputEl = useRef(null)
    const onButtonClick=()=>{ 
        inputEl.current.value="该下班了"
        console.log(inputEl) //输出获取到的DOM节点
    }
    return (
        <div>
            {/*保存input的ref到inputEl */}
            <input ref={inputEl} type="text"/>
            <button onClick = {onButtonClick}>在input上展示文字</button>
        </div>
    )
}

export default Example7

