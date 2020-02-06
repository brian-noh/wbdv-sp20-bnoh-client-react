import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse} from "../services/CourseService";


class CourseManagerContainer extends React.Component {
    state = {
        layout: 'table',
        showEditor: false,
        newCourseTitle:'whatever',
        courses: []
    }

    componentDidMount= async() =>{
        const courses = await findAllCourses()
        this.setState({
            courses: courses
            })
    }

    toggle = () =>
        this.setState(prevState => {
            if (prevState.layout === 'table') {
                return ({
                    layout: 'grid'
                })
            } else {
                return ({
                    layout: 'table'
                })
            }
        })

    deleteCourse =(course) => {
        deleteCourse(course._id)
            .then(status => {
                this.setState(prevState => {
                    return ({
                        courses: prevState.courses.filter(function (crs) {
                            return crs._id != course._id
                        })
                    })

                })
            })

    }
    editCourse = (course, newCourse) =>
        updateCourse(
            course._id,
            newCourse
        )
    addCourse = () =>
        createCourse({
                         title: this.state.newCourseTitle
                     }).then(actualCourse => this.setState(prevState => {
            return({
                courses:[
                    ...prevState.courses,
                    actualCourse
                ]
            })
        }))



    showEditor =()=>
        this.setState({
            showEditor: true
        })

    hideEditor =()=>
        this.setState({
                          showEditor: false
                      })

    updateForm = (newState) => {
        this.setState(newState)

    }

    render(){
        return(
            <div>

                {
                    this.state.showEditor &&
                    <CourseEditorComponent hideEditor={this.hideEditor}/>
                }

                {
                    !this.state.showEditor &&
                    <div>
                        <button onClick={this.toggle}>Toggle</button>

                        <input
                            onChange={(e) => this.updateForm({newCourseTitle:e.target.value})}
                            value ={this.state.newCourseTitle}/>
                        <button onClick={this.addCourse}>Add Course</button>
                        {
                            this.state.layout === 'table' &&


                            <CourseTableComponent
                                courses={this.state.courses}
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}
                                editCourse={this.editCourse}
                                />
                        }

                        {
                            this.state.layout === 'grid' &&
                            <CourseGridComponent

                                editCourse={this.editCourse}
                                courses={this.state.courses}
                                showEditor={this.showEditor}
                                deleteCourse={this.deleteCourse}/>
                        }

                    </div>


                }

            </div>
        )

    }
}



export default CourseManagerContainer