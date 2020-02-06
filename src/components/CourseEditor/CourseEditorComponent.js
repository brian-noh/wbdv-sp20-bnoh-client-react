import React from "react";
import ModuleListComponent from "./ModuleListComponent";
import LessonTabs from "./LessonTabs";
import TopicPills from "./TopicPills";
import WidgetComponent from "./WidgetComponent";

const CourseEditorComponent = ({hideEditor}) =>
    <div>

        <div className="row mb-5">
            <div className="col-4">
                <button onClick={hideEditor}>Close</button>
                <h3>Course Editor</h3>
                <ModuleListComponent
                    modules={[
                        {_id:"123", title: "Module 1"},
                        {_id:"234", title: "Module 2"},
                        {_id:"456", title: "Module 3"},
                        {_id:"556", title: "Module 4"},
                        {_id:"656", title: "Module 5"},
                        {_id:"646", title: "Module 6"},
                        {_id:"655", title: "Module 7"}
                    ]}/>

            </div>
            <div className="col-8">
                <LessonTabs
                    lessons={[
                        {_id:"123", title: "Lessons 1"},
                        {_id:"234", title: "Lessons 2"},
                        {_id:"456", title: "Lessons 3"},
                    ]}/>


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

export default CourseEditorComponent