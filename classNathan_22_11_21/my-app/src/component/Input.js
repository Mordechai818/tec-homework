
const Input = ()=>{
    const handleChange = (evt) => console.log(evt.target.value);
    return (
        <div>
            <input onChange={handleChange} type='text' placeholder='Insert city'></input>
        </div>
    )
};

export default Input