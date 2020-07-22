import React, {Component, forwardRef} from 'react';


class Child1 extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.inputRefFocus = this.inputRefFocus.bind(this)
    }
    inputRefFocus() {
        this.inputRef.current.focus()
    }
    render() {
        return (<div>
        <input type='text' ref={this.inputRef}/>
        <button onClick={this.inputRefFocus}>child1点我</button>
    </div>)
    }
}
function Child2(props) {
    const inputRefFocus = function() {
        props.propRef.current.focus()
    }
    return <div>
        <input type='text' ref={props.propRef}/>
        <button onClick={inputRefFocus}>child2点我</button>
    </div>
}

function Child3(props) {
    return <div>
        {/* prop.inputRef是函数 参数为DOM元素或React组件实例 此处为input */}
        <input type='text' placeholder='child3' ref={props.inputRef}/> 
    </div>
}
const Child4 = forwardRef((props, ref) =>{ // 接收一个渲染函数 渲染函数包含两个参数props和ref 返回一个React节点
    return <div>
        <input type='text' placeholder='child4' ref={ref}/> 
    </div>
})

class Parent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.inputElement = null
    }
    componentDidMount() {
        // this.inputRef.current.inputRefFocus() // 用于类组件 current指向组件实例 可直接调用子组件的方法 对应Child1
        // this.inputRef.current.focus() // 用于函数组件 此处current指向底层的DOM元素 手动调用其DOM方法 对应Child2
        // this.inputElement.focus() // 回调函数获取的ref元素 对应Child3
        this.inputRef.current.focus() // 对应Child4
    }
    render() {
        return (<div>
            {/* <Child1 ref={this.inputRef}></Child1> */}
            {/* 函数组件无实例 所以默认不能使用ref 可通过以下方法传递 */}

            {/* 1.可通过prop的方式进行传递 ref不会包含到prop中 所以属性名不可为ref */}
            {/* <Child2 propRef={this.inputRef}></Child2>  */}

            {/* 2. 以回调函数的形式传递refs 将实际的ref元素存储到当前组件（即Parent组件）的inputElement*/}
            {/* <Child3 inputRef={el => this.inputElement = el}></Child3>  */}

            {/* 3.通过forwardRef函数去获取父组件传递的ref */} 
            <Child4 ref={this.inputRef}></Child4>
        </div>)
    }
}

export default Parent