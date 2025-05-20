import { useParams } from "react-router";
import './class.css';
import NavigationBar from "../../Navbar";

function Class() {
    const { courseId, classId } = useParams();
    return <>
        <NavigationBar />
        <div className="class-app">
            <div className="class-nav-wrapper">
                <div className="class-nav">
                    <ul>
                        <li>aaa</li>
                        <li>aaa</li>
                        <li>aaa</li>
                        <li>aaa</li>
                    </ul>
                </div>
            </div>
            <main className="class-main-wrapper">
                <div className="class-main">
                    <h1>Title</h1>
                    <p>paragraphs.</p>
                    <h2>Subtitle</h2>
                    <p>You are accessing course {courseId}.</p>
                    {classId && <p>The class you are accessing is {classId}.</p>}
                </div>
            </main>
        </div>
    </>;
}

export default Class;
