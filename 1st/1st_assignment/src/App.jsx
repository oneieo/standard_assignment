import { useState } from "react";
import "./App.css";

function App() {
  const initialState = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Doe", age: 21 },
  ];
  const [users, setUsers] = useState(initialState);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleInputName = (e) => {setName(e.target.value)};
  const handleInputAge = (e) => {setAge(e.target.value)};

  const addUser = (e) => {
    e.preventDefault();
    // TODO: 이름과 나이가 모두 입력되지 않았을 때는 alert 처리하고 함수를 종료하세요. 논리합연산자 (||) 를 이용하세요.
    if( !name.trim() || !age.trim() ){
      alert("이름과 나이를 입력하세요");
      return;
    }
    // TODO: 사용자 리스트 상태를 업데이트 하세요. spread operator 를 사용하고, 추가되는 id는 현재 시간을 밀리초 단위로 반환하는 Date.now() 를 사용하세요.
    const newUser = {
      id: new Date().getTime(),
      name,
      age,
    };

    setUsers([...users, newUser]);
    setName("");
    setAge("");
  };

  const removeUser = (id) => {
    // TODO: filter 메소드를 사용해서 사용자 삭제 로직을 구현해 보세요.
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <>
      <h1>사용자 리스트</h1>
      <form onSubmit={addUser}>
        {/* TODO: input 태그에 value, onChange 속성을 추가해서 이름과 나이의 상태와 상태변경 로직을 연결하세요 */}
        <input type="text" placeholder="이름" value={name} onChange={handleInputName}/>
        <input type="number" placeholder="나이" value={age} onChange={handleInputAge}/>
        <button type="submit" onClick={addUser}>사용자 추가</button>
      </form>
      <ul>
        {/* TODO: map 메소드를 이용해서 user 리스트를 렌더링하세요.  */}
        {users.map(user => {
          return <div key={user.id} className="user-box">
          <li>{user.name}{" : "}{user.age}</li>
          <button onClick={() => removeUser(user.id)}>삭제</button>
          </div>
        })}
      </ul>
    </>
  );
}

export default App;