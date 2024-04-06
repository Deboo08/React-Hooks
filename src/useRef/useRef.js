import React, {useRef} from 'react';

export default function App () {
    const inputRef = useRef();
    return (
        <div>
            <input type="text" ref={inputRef} />
        </div>
    )
}