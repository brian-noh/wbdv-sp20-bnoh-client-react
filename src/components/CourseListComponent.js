import CourseTableComponent from "./CourseTableComponent";
import CourseGridComponent from "./CourseGridComponent";
import React from "react";

const CourseListComponent =
    ({
        toggle,
        updateForm,
        newCourseTitle,
        addCourse,
        layout,
        deleteCourse,
        editCourse,
        showEditor,
        courses
    }) =>
<div>
    <button onClick={toggle}>Toggle</button>

    <input
        onChange={(e) => updateForm({newCourseTitle:e.target.value})}
        value ={newCourseTitle}/>
    <button onClick={addCourse}>Add Course</button>
    {
        layout === 'table' &&


        <CourseTableComponent
            courses={courses}
            showEditor={showEditor}
            deleteCourse={deleteCourse}
            editCourse={editCourse}
        />
    }

    {
        layout === 'grid' &&
        <CourseGridComponent

            editCourse={editCourse}
            courses={courses}
            showEditor={showEditor}
            deleteCourse={deleteCourse}/>
    }

</div>

export default CourseListComponent