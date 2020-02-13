import React from "react";
import {connect} from "react-redux";

import {
    CREATE_LESSONS,
    createLesson,
    DELETE_LESSON,
    deleteLesson
} from "../../actions/lessonActions";
import lessonService from "../../services/LessonService";


class LessonTabs extends React.Component {
    componentDidMount() {
        this.props.findLessonsForModule(this.props.moduleId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.moduleId != this.props.moduleId) {
            this.props.findLessonsForModule(this.props.moduleId)
        }
    }
    render() {
        return(

<ul class="nav nav-tabs">
    {this.props.lessons && this.props.lessons.map(lessons =>
                 <li class="nav-item"key={lessons._id}>
                     <a class="nav-link">
                     {lessons.title}
                     </a>

                     <button onClick={() => this.props.deleteLesson(lessons._id)}
                             Delete/>

                 </li>


    )}
    <li>
        <button onClick={
            () => this.props.createLesson(this.props.lessonId)}>
            Create</button>
    </li>



</ul>
        )}}

const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatchToPropertyMapper = (dispatch) => {
    return {
        findLessonForModule: (moduleId) =>
            lessonService.findLessonForModule(moduleId)
                .then(actualLesson => dispatch({
                                                   type: 'FIND_LESSONS_FOR_MODULE',
                                                   lessons: actualLesson
                                               })),

        findAllLessons: () =>

            lessonService.findAllLessons()
                .then(actualLessons =>
                          dispatch({
                                       type: "FIND_ALL_LESSONS",
                                       modules: actualLessons
                                   })),

        deleteLesson: (lessonId) =>
            lessonService.deleteModule(lessonId)
                .then(status =>
                          dispatch(deleteLesson(lessonId))),

        createLesson: (moduleId) => {
            lessonService.createLesson(moduleId)
                .then(actualModule =>
                          dispatch(createLesson(actualModule)
                          ))
        }
    }
}



export default connect(
            stateToPropertyMapper,
            dispatchToPropertyMapper)
        (LessonTabs)