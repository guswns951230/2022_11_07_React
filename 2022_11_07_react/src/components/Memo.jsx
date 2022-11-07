import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addmemo } from "../modules/memo";

import "../css/Memo.css";

const Memo = () => {
  const memolist = useSelector((state) => state.memo.memolist);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const addMemo = useCallback(() => {
    dispatch(addmemo({ name: name, text: text }));
  }, [dispatch, name, text]);

  return (
    <>
      <h1>방명록을 작성해주세요</h1>
      <div className="form">
        <label>이름</label>
        <input
          type="text"
          size="10"
          maxLength="10"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="방명록 작성"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={addMemo}>작성</button>
      </div>

      {memolist.map((memo) => (
        <li>
          {memo.name} : {memo.text} {memo.date}
        </li>
      ))}
    </>
  );
};

export default Memo;
