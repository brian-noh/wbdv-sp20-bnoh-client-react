import React from "react";
import CourseTableComponent from "../components/CourseTableComponent";
import CourseGridComponent from "../components/CourseGridComponent";
import CourseEditorComponent from "../components/CourseEditor/CourseEditorComponent";
import {findAllCourses, deleteCourse, createCourse, findCourseById, updateCourse} from "../services/CourseService";
import CourseListComponent from "../components/CourseListComponent";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";


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
                {/*<Router>*/}
                {/*    <Link to={"/page1"}>*/}
                {/*        Page1*/}

                {/*    </Link>*/}
                {/*    <Link to={"/page2"}>*/}
                {/*        Page2*/}

                {/*    </Link>*/}


                {/*    <Route path="/page1"*/}
                {/*            component={Page1}/>*/}

                {/*    <Route path="/page2/:message"*/}
                {/*           exact={true}*/}
                {/*            component={Page2}/>*/}
                {/*</Router>*/}


                    <Router>

                        <Route path="/"
                               exact={true}
                               render={()=>
                                   <CourseListComponent
                                       toggle = {this.toggle}
                                       updateForm = {this.updateForm}
                                       newCourseTitle = {this.state.newCourseTitle}
                                       addCourse = {this.addCourse}
                                       layout = {this.state.layout}
                                       deleteCourse = {this.deleteCourse}
                                       editCourse = {this.editCourse}
                                       showEditor = {this.showEditor}
                                       courses = {this.state.courses}

                                   />}/>


                        <Route path="/course-editor/:courseId"
                               exact={true}
                               render={(props) =>
                                   <CourseEditorComponent {...props}
                                                          courseId={props.match.params.courseId}
                                                          moduleId={props.match.params.moduleId}

                                   />

                               }/>

                        <Route path="/course-editor/:courseId/modules/:moduleId/lessons"
                               exact={true}
                               render={(props) =>
                                   <CourseEditorComponent {...props}
                                                          courseId={props.match.params.courseId}
                                                          moduleId={props.match.params.moduleId}
                                   hideEditor={this.hideEditor}/>


                               }/>

                        <Route path="/course-editor/:courseId/modules/:moduleId/lessons/:lessonId"
                               exact={true}
                               render={(props) =>
                                   <CourseEditorComponent {...props}
                                                          courseId={props.match.params.courseId}
                                                          moduleId={props.match.params.moduleId}
                                                          lessonId={props.match.params.lessonId}
                                                          hideEditor={this.hideEditor}/>


                               }/>



                        <Route path="/course-editor/:courseId/modules/:moduleId/lessons/:lessonId/topics/:topicId"
                               exact={true}
                               render={(props) =>
                                   <CourseEditorComponent
                                       {...props}
                                       topicId={props.match.params.topicId}
                                       courseId={props.match.params.courseId}
                                       moduleId={props.match.params.moduleId}
                                       lessonId={props.match.params.lessonId}

                                   />

                               }/>


                    </Router>



            </div>
        )

    }
}



export default CourseManagerContainer