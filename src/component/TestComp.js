import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INIT":
            return 0;
        case "INCREASE":
            return state + action.data;
        case "DECREASE":
            return state - action.data;
        default:
            return state;
    }
}

function TestComp() {
    const [count, dispatch] = useReducer(reducer, 0);
    return (
        <div>
            <h4>테스트 컴포넌트</h4>
            <div>
                <bold>{count}</bold>
            </div>
            <div>
                <button onClick={() => dispatch({ type: "INIT", data: 0 })}>초기화</button>
                <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+</button>
                <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-</button>
            </div>
        </div>
    );
}

export default TestComp;