import React from "react";

class TopicPills extends React.Component {
    componentDidMount() {
        this.props.findTopicsForLessons(this.props.topicId)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.moduleId != this.props.moduleId) {
            this.props.findTopicsForLessons(this.props.topicId)
        }
    }
    render() {
        return(

<ul class="nav nav-pills">
    {this.props.topics.map(topics =>
                     <li class="nav-item"key={topics._id}>
                         <a class="nav-link">
                         {topics.title}
                         </a>

                         <button onClick={() => this.props.deleteTopic(topics._id)}
                                 Delete/>
                     </li> )}
    <li>
        <button onClick={
            () => this.props.createLesson(this.props.lessonId)}>
            Create</button>
    </li>

</ul>

        )}
}


export default TopicPills