import React from "react";
import widgetReducer from "../../../reducers/widgetReducer";

class HeadingWidget extends React.Component {

    state = {
        widget: this.prop.widget
    }

    render(){

        return(
            <div>
                {
                    !this.props.editing &&

                    <div>

                        {this.state.widget.title}

                    </div>
                }
                {
                    this.props.editing &&
                    <div>
                        <input

                            onChange={(e) => {
                            const newTitle=e.target.value;
                            this.setState(prevState => ({
                                widget:{
                                    ...prevState.widget,
                                    title:newTitle
                                }
                            }))}
                            }
                            value={this.state.widget.title}/>
                        <select>
                            <option> Heading 1</option>
                            <option> Heading 2</option>
                            <option> Heading 3</option>
                            <option> Heading 4</option>
                            <option> Heading 5</option>
                        </select>

                    </div>

                }

            </div>


        )
    }



}

export default HeadingWidget