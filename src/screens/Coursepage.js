import "./Coursepage.css"
import Header2 from '../components/Header2'
import { Link } from "react-router-dom";
function Coursepage()
{
    return (
        <>
        <Header2/>
        <h1>My courses</h1>
        <h2>Course overview</h2>
        <div className="coursepage">
            <Link to='/brief'>
            <div className="course">
                <div className="coursetit">
                    <p className="coursename">DBMS</p>
                </div>
            </div>
            </Link>
            <Link to='/brief'>
            <div className="course">
                <div className="coursetit">
                    <p className="coursename" style={{marginTop:"10em"}}>Data Structures with C</p>
                </div>
            </div>
            </Link>
            <Link to='/brief'>
            <div className="course">
                <div className="coursetit">
                    <p className="coursename">Embedded Systems</p>
                </div>
            </div>
            </Link>
            <Link to='/brief'>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">Circuit Analysis</p>
            </div>
        </div>
        </Link>
        <Link to='/brief'>
        <div className="course">
            <div className="coursetit">
                <p className="coursename"style={{marginTop:"10em"}}>Object Oriented Programming</p>
            </div>
        </div>
        </Link>
        <Link to='/brief'>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">Introduction to Python</p>
            </div>
        </div>
        </Link>
        <Link to='/brief'>]
        <div className="course">
            <div className="coursetit">
                <p className="coursename">Low level system design</p>
            </div>
        </div>
        </Link>
        <Link to='/brief'>
        <div className="course">
            <div className="coursetit">
                <p className="coursename"style={{marginTop:"10em"}}>Entrepreneurship</p>
            </div>
        </div>
        </Link>
        <Link to='/brief'>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">IoT</p>
            </div>
        </div>
        </Link>
    </div>
    </>
    )
}
export default Coursepage;