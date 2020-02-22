import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
            <ul>
                {
                    this.props.lessons && this.props.lessons.map(lesson =>
                                                                     <Link to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${lesson._id}`}>
                                                                         {lesson.title}
                                                                     </Link>
                    )
                }
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    lessons: state.lessons.lessons
})

const dispatcherToPropsMapper = (dispatcher) => ({
    findLessonsForModule: (moduleId) => {

    }
})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropsMapper)
(LessonTabs)