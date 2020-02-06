import React from "react";
import CourseRow from "./CourseRow";

const CourseTableComponent = ({courses, deleteCourse, editCourse, showEditor}) =>
    <div>


        <h1>
            <div className="row container">
                <div className="col-4">
                    <i className="fa fa-bars wbdv-field wbdv-hamburger"></i>
                    <a className="wbdv-label wbdv-course-manager">
                        Course Manager
                    </a>
                </div>

                <div className="row">


                </div>
            </div>


        </h1>
        <ul>
            {
                courses.map(function(course, index){
                    return (
                <div>

                    <CourseRow
                        showEditor={showEditor}
                        deleteCourse={deleteCourse}
                        key={index}
                        course={course}
                        editCourse={editCourse}
                    />
                </div>
                    )
                })
            }
        </ul>
    </div>

export default CourseTableComponent