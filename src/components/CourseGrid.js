import React from "react";

class CourseGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {editing: false, newTitle: ""}
    }

    render() {
        const newCourse = this.props.course;

        const editFunction = () => {
            this.props.editCourse(this.props.course, newCourse);
            this.setState({editing: false})
        }

        return (
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div>
                    <i className="fa-5x fa fa-file wbdv-row wbdv-icon"></i>
                </div>

                {
                    !this.state.editing &&
                    <a
                        onClick={this.props.showEditor}
                        href="#">
                        {this.props.course.title}
                    </a>
                }
                {this.state.editing &&
                 <input
                     onChange={(e) => {
                         newCourse.title = e.target.value
                     }}
                 />
                }

                <div>
                    Last Modified
                </div>

                <div>
                    {new Date().toLocaleString()}
                </div>

                <div>
                    Last Owned
                </div>

                <div>
                    {
                        !this.state.editing &&
                        < button
                            onClick={() => {
                                this.setState({
                                                  editing: true
                                              })
                            }}Edit/>
                    }

                    {
                        this.state.editing &&
                        <button
                           onClick={editFunction}>
                        Edit</button>
                    }

                    <button onClick={() => this.props.deleteCourse(this.props.course)}>
                        Delete
                    </button>

                </div>
            </div>
        )
    }
}

export default CourseGrid