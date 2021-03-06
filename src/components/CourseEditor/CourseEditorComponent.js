import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetComponent from "./WidgetComponent";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import moduleReducer from "../../reducers/moduleReducer"
import lessonReducer from "../../reducers/lessonReducer";



const rootReducer = combineReducers({
    modules: moduleReducer,
    lessons : lessonReducer

})

const store = createStore(rootReducer)

const CourseEditorComponent = ({hideEditor, match, history, courseId, moduleId}) =>

    <Provider store={store}>
    <div>

        <div className="row mb-5">
            <div className="col-4">
                <button onClick={() => history.push("/")}>Close</button>
                <h3>Course Editor {match.params.courseId}</h3>
                <ModuleListComponent
                    courseId={match.params.courseId}/>

            </div>
            <div className="col-8">
                {/*<LessonTabs*/}
                {/*    lessons={[*/}
                {/*        {_id:"123", title: "Lessons 1"},*/}
                {/*        {_id:"234", title: "Lessons 2"},*/}
                {/*        {_id:"456", title: "Lessons 3"},*/}
                {/*    ]}*/}
                {/*/>*/}
                <LessonTabs
                    moduleId={match.params.moduleId}
                    courseId={match.params.courseId}
                    lessons={[
                            {_id:"123", title: "Lessons 1"},
                            {_id:"234", title: "Lessons 2"},
                            {_id:"456", title: "Lessons 3"}
                        ]}
                />

                <TopicPills
                    topics={[
                        {_id:"123", title: "Topic 1"},
                        {_id:"234", title: "Topic 2"},
                        {_id:"456", title: "Topic 3"},

                    ]}/>


                <h2>Header Widget
                    <i className="fa fa-arrow-up wbdv-arrow-icon"></i>
                    <i className="fa fa-arrow-down wbdv-arrow-icon"></i>

                    <select className="custom-select-sm">
                        <option value="header">Header</option>
                        <option value="w1">widget</option>
                        <option value="w2">widget</option>
                        <option value="w3">widget</option>
                    </select>

                </h2>
                <WidgetComponent/>




            </div>



        </div>

    </div>
    </Provider>

export default CourseEditorComponent