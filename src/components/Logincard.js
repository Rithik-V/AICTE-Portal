import  "./Logincard.css";
function Logincard(){
    return (
        <div className="loginbox">
            <h3>Username</h3>
            <input type="text"id="username"></input>
            <h3>Password</h3>
            <input type="password" id="password"></input>
            <input type="checkbox" name="rem"></input>
            <label for="rem">Remember me</label>
            <buttton id="loginenter">Submit</buttton>
        </div>
    );
}
export default Logincard;