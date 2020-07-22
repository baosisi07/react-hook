// useMemo的应用 缓存变量 提升渲染性能
import React, {useState,useMemo} from 'react'

function ChildComp({name,children}) {
    let count = 0
    const changeName = (name) => {
        count++
        console.log(`${count} is going to work`)
        return name + '来吧'
    }
    const whatname = useMemo(() => changeName(name),[name])
    return (
        <div>
            <p>{whatname}</p>
            <p>{children}</p>
        </div>
    )
}


function Example6() {
    const [si,setSi] = useState('工作中……')
    const [nian, setNian] = useState('摸鱼中……')
    return (
        <div>
            <button onClick={() => {setSi('结束工作啦')}}>{si}</button>
            <button onClick={() => {setNian('抓紧工作')}}>{nian}</button>
            <ChildComp name={si}>{nian}</ChildComp>
        </div>
    )
}

export default Example6