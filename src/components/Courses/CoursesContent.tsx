import { useEffect, useState } from "react";
import { CourseEntry } from "../../Types/Course";
import { components, operations } from "../../../api/openapi";

function CoursesContent() {
    const [courses, setCourses] = useState<CourseEntry[]>();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const resp = await fetch('/api/courses');
                if (!resp.ok) {
                    console.log('Failed to fetch courses data:', resp.statusText);
                    return;
                }

                const obj : operations['enumerateCourses']['responses']['200']['content']['application/json'] = JSON.parse(await resp.text());
                if (!obj || !obj.courses) {
                    return;
                }
                const lst : CourseEntry[] = [];
                for (const c of obj.courses) {
                    lst.push({
                        Id: c.id,
                        Name: c.name,
                        Description: c.description ?? "",
                        ThumbnailUrl: c.thumbnail ? new URL(c.thumbnail) : new URL("")
                    });
                }
                setCourses(lst);
            } catch (e) {
                console.log('Failed to fetch courses data due to internal error:', e);
            }

        };
        fetchData();
    }, []);

    
}

export default CoursesContent;
