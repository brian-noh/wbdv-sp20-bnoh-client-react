
import React from "react"
import {Link} from "react-router-dom";
class CourseRow extends React.Component {
    state ={
        editing: false
    }

    render(){
        const newCourse = this.props.course;
        const updateFunction =()=> {
            this.props.editCourse(this.props.course, newCourse);
            this.setState({editing:false})
        }
        return(
            <li>
                {
                    !this.state.editing &&
                 <Link to ={`/course-editor/${this.props.course._id}`}>
                    {this.props.course.title}
                </Link>
                }
                {this.state.editing && <input/>}

                <button onClick={() => this.props.deleteCourse(this.props.course)}>Delete</button>
                <button onClick={() => {
                    this.setState({
                        editing: true
                                  })
                }}>Edit</button>

                <button onClick={updateFunction}> Save</button>

            </li>

        )
    }
}


export default CourseRow