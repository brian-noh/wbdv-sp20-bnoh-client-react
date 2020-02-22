import React from "react";
import {connect} from "react-redux";
import TopicService from "../../services/TopicService";
import {Link} from "react-router-dom";

class TopicPills extends React.Component {

    componentDidMount() {
        this.props.findTopicsForLesson(this.props.topicId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.topicId !== prevProps.topicId) {
            this.props.findTopicsForLesson(this.props.lessonId)
        }
    }

    render() {
        return (
            <ul >
                {
                    this.props.topics && this.props.topics.map(topic =>
                                                                   <li className="nav-item"
                                                                       key={topic._id}>
                                                                       <Link to={`/course-editor/${this.props.courseId}/modules/${this.props.moduleId}/lessons/${this.props.lessonId}/topics/${topic._id}`}>
                                                                           {topic.title}
                                                                       </Link>

                                                                   </li>
                    )
                }
                <button onClick={() => this.props.addTopic(this.props.lessonId)}>+</button>
            </ul>
        )
    }
}

const stateToPropertyMapper = (state) => ({
    topics: state.topics.topics
})

const dispatcherToPropertyMapper = (dispatcher) => ({
    findTopicsForLesson: (topicId) =>
        TopicService.findTopicsForLesson(topicId)
            .then(topics => dispatcher({
                                           type: 'FIND_TOPICS_FOR_LESSONS',
                                           topics: topics
                                       })),

    addTopic: (lessonId) =>
        fetch(`https://wbdv-generic-server.herokuapp.com/api/001272260/lessons/${lessonId}/topics`, {
            method: 'POST',
            body: JSON.stringify({title: 'New Topic'}),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(actualTopic =>
                      dispatcher({
                                     type: 'CREATE_TOPIC',
                                     topic: actualTopic
                                 })),

})

export default connect(
    stateToPropertyMapper,
    dispatcherToPropertyMapper
)(TopicPills)