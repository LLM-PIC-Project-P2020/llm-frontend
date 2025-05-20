import { useParams } from "react-router";

function Class() {
    const { courseId, classId } = useParams();
    return <div>You are accessing {courseId} with {classId}.</div>;
}

export default Class;
