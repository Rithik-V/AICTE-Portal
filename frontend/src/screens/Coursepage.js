import "./Coursepage.css"
function Coursepage()
{
    return (
        <>
        <h1>My courses</h1>
        <h2>Course overview</h2>
        <div className="coursepage">
            <div className="course">
                <div className="coursetit">
                    <p className="coursename">DBMS</p>
                </div>
            </div>
            <div className="course">
                <div className="coursetit">
                    <p className="coursename" style={{marginTop:"10em"}}>Data Structures with C</p>
                </div>
            </div>
            <div className="course">
                <div className="coursetit">
                    <p className="coursename">Embedded Systems</p>
                </div>
            </div>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">Circuit Analysis</p>
            </div>
        </div>
        <div className="course">
            <div className="coursetit">
                <p className="coursename"style={{marginTop:"10em"}}>Object Oriented Programming</p>
            </div>
        </div>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">Introduction to Python</p>
            </div>
        </div>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">Low level system design</p>
            </div>
        </div>
        <div className="course">
            <div className="coursetit">
                <p className="coursename"style={{marginTop:"10em"}}>Entrepreneurship</p>
            </div>
        </div>
        <div className="course">
            <div className="coursetit">
                <p className="coursename">IoT</p>
            </div>
        </div>
    </div>
    </>
    )
}
export default Coursepage;