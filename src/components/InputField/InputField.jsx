const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <div className="App">
      <label>
        <input value={text} onChange={e => handleInput(e.target.value)} />
        <button onClick={handleSubmit}>Add Todo</button>
      </label>
    </div>
  );
};
export default InputField;
