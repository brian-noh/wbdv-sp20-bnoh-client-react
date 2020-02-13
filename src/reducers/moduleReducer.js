import {CREATE_MODULE, DELETE_MODULE} from "../actions/moduleActions";

const initialState = {

    modules : [
        {_id:"123", title: "Module 1"},
        {_id:"133", title: "Module 2"},
        {_id:"124", title: "Module 3"},
        {_id:"126", title: "Module 4"}
    ]
}

const moduleReducer = (state = initialState, action) => {
    switch (action.type){

        case "FIND_MODULES_FOR_COURSE":
            return {
                modules: action.modules
            }
        case "FIND_ALL_MODULES":
            return {
                modules: action.modules
            }

        case CREATE_MODULE :
            return {
                modules: [
                    ...state.modules,

                    action.newModule
                ]
            }
        case DELETE_MODULE :
        return {
            modules: state.modules.filter(module => module._id !== action.moduleId)
        }

        // case "UPDATE_MODULE" :
        //     return{
        //         modules: [...state,
        //
        //
        //
        //                   ]
        //     }
        default:
            return state
    }

    return state;
}

    export default moduleReducer