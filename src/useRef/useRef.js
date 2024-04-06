import React, {useState, useRef} from 'react';

export default function App () {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    const handleClick = () => {
        setCount(count + 1);
        // 每次点击时，更新prevCountRef的值
        prevCountRef.current = count;
    }

    return (
        <div>
            <p>Count: {count}</p>
            <p>上次的Count: {prevCountRef.current}</p>
            <button onClick={handleClick}>按钮</button>
        </div>
    )
}