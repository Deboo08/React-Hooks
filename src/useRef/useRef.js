import React, {useState, useRef} from 'react';

export default function App () {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    const handleClick = () => {
        // 保存上一次的count值
        prevCountRef.current = count;
        // 更新count值
        setCount(count + 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p>上次的Count: {prevCountRef.current}</p>
            <button onClick={handleClick}>按钮</button>
        </div>
    )
}