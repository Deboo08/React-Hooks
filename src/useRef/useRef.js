import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';

const Child = forwardRef (function (props, ref) {
    useImperativeHandle(ref, () => ({
        myFn: () => {
            console.log('子组件myFn方法');
        }
    }))
    return(
        <div></div>
    )
})

export default function App () {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    const ChildRef = useRef();

    const handleClick = () => {
        // 保存上一次的count值
        prevCountRef.current = count;
        // 更新count值
        setCount(count + 1);
        // 调用子组件的方法
        ChildRef.current.myFn();
    }

    return (
        <div>
            <Child ref={ChildRef}/>
            <p>Count: {count}</p>
            <p>上次的Count: {prevCountRef.current}</p>
            <button onClick={handleClick}>按钮</button>
        </div>
    )
}