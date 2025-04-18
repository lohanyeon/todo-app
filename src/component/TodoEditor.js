import { useContext, useRef, useState } from 'react';
import './TodoEditor.css';
import { TodoDispatchContext } from '../App';

const TodoEditor = () => {
    const { onCreate } = useContext(TodoDispatchContext);
    console.log('TodoEditor');
    const [content, setContent] = useState("");
    const inputRef = useRef();
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onSubmit = () => {
        if (!content) {
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
        inputRef.current.focus();
    };
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️ </h4>
            <div className="editor_wrapper">
                <input value={content}
                    ref={inputRef}
                    onChange={onChangeContent}
                    onKeyDown={onKeyDown}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );

};

export default TodoEditor;