import { ReactElement, useEffect, useState } from "react";
import { CourseEntry } from "../../Types/Course";
import { operations } from "../../../api/openapi";
import { Card } from "@blueprintjs/core";

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
                        Description: c.description ?? "Missing description.",
                        ThumbnailUrl: c.thumbnail ? new URL(c.thumbnail) : new URL("https://placeholder.im/300x200/cccccc")
                    });
                }
                setCourses(lst);
            } catch (e) {
                console.log('Failed to fetch courses data due to internal error:', e);
            }

        };
        fetchData();
    }, []);

    const elements : ReactElement[] = [];
    for (const c of courses??[]) {
        elements.push(
            <Card key={`courses-card-${c.Id}`} interactive onClick={() => window.location.href=`/courses/${c.Id}`}>
                <img src={c.ThumbnailUrl.toString()} style={{width: '100%'}}/>
                <h3>{c.Name}</h3>
                <p>{c.Description}</p>
            </Card>
        );
    }

    return <div className="CoursesContainerPage">
        <div className="CoursesContainer">
            {elements}
        </div>
    </div>;
}

export default CoursesContent;
