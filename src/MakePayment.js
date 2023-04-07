const MakePayment = () =>{
    return (
        <div style={{padding:'30px'}}>
            <form>
                <h3>Reason: </h3>
                
                <input style={{height:'40px'}}></input>
                <br></br><br></br>
                <h3>Send to: </h3>  
                <input style={{height:'40px'}}></input>
                <br></br><br></br>
                <h3>Amount: </h3>

                <input style={{height:'40px'}}></input>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <button style={{width:'100px', height:'50px' , backgroundColor:'lightblue', size:'20px'}}>pay</button>
            </form>
        </div>
    )
}
export default MakePayment