import React from "react";
import {connect} from "react-redux";
import {
    CREATE_MODULE,
    createModule,
    DELETE_MODULE,
    deleteModule,
    updateModule
} from "../../actions/moduleActions";

import moduleService, {findModuleForCourse} from '../../services/ModuleService';
import {API_URL} from "../../constants";
import {updateCourse} from "../../services/CourseService";
import {Link} from "react-router-dom";

class ModuleListComponent extends React.Component {

    componentDidMount() {
        this.props.findModuleForCourse(this.props.courseId)
    }
    state ={
        editing: false
    }

    render(){
        return(
            <div>
                <ul className="list-group">

                    {this.props.modules && this.props.modules.map(module =>
                                                <li className="list-group-item" key={module._id}>
                                                    <button onClick={() => this.props.deleteModule(module._id)}
                                                            Delete/>

                                                    <Link to ={`/course-editor/module/${module._id}/lessons`}>
                                                        {module.title}
                                                    </Link>


                                                    {this.state.editing && <input/>}
                                                    <button onClick={() => {
                                                        this.setState({
                                                                          editing: true
                                                                      })
                                                        // this.props.updateModule(this.props.courseId, module)
                                                    }}>Edit</button>

                                                    <button> Save</button>
                                                </li>

                    )}

                    <li>
                        <button onClick={
                            () => this.props.createModule(this.props.courseId)}>
                            Create</button>
                    </li>
                </ul>
            </div>
        );


}

}

const stateToPropertyMapper  = (state) => {
    return {
        modules: state.modules.modules
    }
}

const dispatchToPropertyMapper = (dispatch) => {
    return{
        findModuleForCourse: (courseId) =>
            moduleService.findModuleForCourse(courseId)
                .then(actualModules => dispatch({
                   type: 'FIND_MODULES_FOR_COURSE',
                   modules : actualModules
                })),


        findAllModules: () =>

             moduleService.findAllModules()
                .then(actualModules =>
                 dispatch({
                type: "FIND_ALL_MODULES",
                modules: actualModules
                     })),

        deleteModule:(moduleId) =>
            moduleService.deleteModule(moduleId)
                .then(status =>
                     dispatch(deleteModule(moduleId))),

        createModule: (courseId) => {
           moduleService.createModule(courseId)
                .then(actualModule =>
                          dispatch(createModule(actualModule)

            ))
        },
        updateModule: (courseId, module) => {
            moduleService.updateModule(courseId, module)
                .then(actualModules => dispatch())
    }

    }
}

export default connect(
    stateToPropertyMapper, dispatchToPropertyMapper)
(ModuleListComponent)