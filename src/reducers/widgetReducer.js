const widgets = [
    {id: "123", title:"W123",},
    {id: "223", title:"W234",},
    {id: "323", title:"W345",},
    {id: "423", title:"W4"}


]


const widgetReducer = (
    state = {widgets:widgets}, action) => {

    switch(action.type){
        case "UPDATE_WIDGET":
            return {
                widgets:state.widgets.map(widget => widget.id === action.widget.id?action.widget : widget)
            }

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }
        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => widget.id !== action.widgetId)
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                widgets: action.widgets
            }

        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        default:
            return state

    }


}


export default widgetReducer