import { Text } from "@chakra-ui/react";

function App() {
  // const [count, setCount] = useState(0);
  // const [input2, setInput2] = useState("");
  // const hadleCountUpdate = () => {
  //   setCount(count + 1);
  // };
  // useEffect(() => {
  //   console.log("랜더링");
  // });
  // useEffect(() => {
  //   console.log("랜더링+ 빈값");
  // }, []);
  // useEffect(() => {
  //   console.log("랜더링+count state 변경");
  // }, [count]);
  // useEffect(() => {
  //   console.log("랜더링+input2 state 변경");
  // }, [input2]);

  // const handleChange = (e) => {
  //   setInput2(e.target.value);
  // };

  // const [people, setPeople] = useState(["남지완", "윤제록"]);
  // const [fruit, setFruit] = useState(["사과", "수박", "파인애플"]);
  // const [input, setInput] = useState("");
  // const [name, setName] = useState("");

  // const changeName = (e) => {
  //   setName(e.target.value);
  // };
  // const hadleUpload = () => {
  //   setPeople((prev) => {
  //     return [...prev, name];
  //   });
  // };
  // const removeName = () => {
  //   setPeople((prev) => {
  //     return prev.unshift();
  //   });
  // };

  // const changeInput = (e) => {
  //   setInput(e.target.value);
  // };
  // const hadleInput = () => {
  //   setFruit((prev) => {
  //     return [...prev, input];
  //   });
  // };
  return (
    <>
      <Text fontSize={"2xl"} color={"red"}>
        마블
      </Text>
      {/* <button onClick={hadleCountUpdate}>Update</button>
      <input type="text" onChange={handleChange} value={input2} />
      <p>{input2}</p> */}
      {/* <input type="text" value={name} onChange={changeName} />
      <button onClick={hadleUpload}>Upload</button> */}
      {/* 화면 보여주는 부분 */}
      {/* {fruit.map((item) => (
        <p>{item}</p>
      ))}
      {people.map((item) => (
        <>
          <p key={item}>{item}</p>
          <button onClick={removeName}>X</button>
        </>
      ))}
      <input type="text" value={input} onChange={changeInput} />
      <button onClick={hadleInput}>Upload</button> */}
      {/* 화면 보여주는 부분 */}
      {/* {fruit.map((item) => (
        <p>{item}</p>
      ))}  */}
    </>
  );
}

export default App;
