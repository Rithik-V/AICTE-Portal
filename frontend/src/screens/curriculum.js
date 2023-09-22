import "./curriculum.css"
import ReactDOM from 'react-dom'
function Cirriculum()
{
    function file1()
    {
        let a = document.getElementById("pdf_view")
        let a1 = ReactDOM.findDOMNode(a);
        a1.src="https://www.ssn.edu.in/wp-content/uploads/2023/04/B.Tech-IT-R2021-Curriculum-Syllabi.pdf#toolbar=0"
    }
    function file2()
    {
        let a = document.getElementById("pdf_view")
        let a1 = ReactDOM.findDOMNode(a);
        a1.src="https://www.ssn.edu.in/wp-content/uploads/2020/06/BE_ECE_CurriculumSyllabi.pdf#toolbar=0"
        console.log("yes");
    }
    function file3()
    {
        let a = document.getElementById("pdf_view")
        let a1 = ReactDOM.findDOMNode(a);
        a1.src="https://www.ssn.edu.in/wp-content/uploads/2023/05/BE_EEE_Curriculum2018-2.pdf#toolbar=0"
        console.log("yes1");
    }
    return (
        <>
        <div className="wrapper">
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li onClick={file1}><a href="#"><i className="fas fa-home"></i>Regualation 2021</a></li>
                <li onClick={file2}><a href="#"><i className="fas fa-user"></i>Regualation 2018</a></li>
                <li onClick={file3}><a href="#"><i className="fas fa-address-card"></i>Regualation 2015</a></li>
            </ul>
        </div>
    </div>
        <div className="container">
            <iframe id="pdf_view"src="https://www.ssn.edu.in/wp-content/uploads/2020/06/BE_ECE_CurriculumSyllabi.pdf#toolbar=0" width="800" height="500"/>
        </div>
    </>
    )
}
export default Cirriculum;