
function Home () {
    
    const handClick=(event) => {
        console.log('hello', event.target)
    }

    const handClickAgain=(name,event)=>{
            console.log(`my name is:${name}`, event.target );
    }

    let firstname = 'Mordechai';


    const changeName = () => {
        firstname = 'Avraham';
        console.log(firstname);
    }


    return (<div>
        <h2>HOME PAGE</h2>
        <button onClick={handClick}>click me</button>
        <button onClick={(event)=>{handClickAgain('Moshe', event)}}>click me Again</button>
        <button onClick={changeName}>CHANGE NAME</button>
        <p>{firstname}</p>
    </div>)
}

export default Home