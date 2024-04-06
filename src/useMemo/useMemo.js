import React, { useState, useMemo} from 'react';

function DoSomeMath({value}) {
    const result = useMemo(() => {
        console.log("do some math")
        let result = 0;
        for (let i = 0; i < 1000000; i++) {
            result = value * i;
        }
        return result;
    },[value])

        return (
            <div>
                <p>输入的内容：{value}</p>
                <p>结果：{result}</p>
            </div>
        )
    }

export default function App () {
    const [inputValue, setInputValue] = useState(5);
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count的值为：{count}</p>
            <button onClick={() => setCount(count+1)}>点击更新</button>
            <br/>
            <br/>
            <input
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
            <DoSomeMath value={inputValue}></DoSomeMath>
        </div>
    )
}