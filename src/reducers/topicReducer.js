import {CREATE_TOPIC, DELETE_TOPIC} from "../actions/topicActions";



const initialState = {

    topics : [
        {title: "Topics 123", _id : "123"},
        {title: "Topics 234", _id : "234"},
        {title: "Topics 345", _id : "345"},
        {title: "Topics 000", _id : "000"}
    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {

        case "FIND_TOPICS_FOR_MODULE":
            return {
                lessons: action.lessons
            }
        case "FIND_ALL_TOPICS":
            return {
                lessons: action.lessons
            }

        case CREATE_TOPIC :
            return {
                topics: [
                    ...state.topics,

                    action.newTopic
                ]
            }
        case DELETE_TOPIC :
            return {
                topics: state.topics.filter(topic => topic._id !== action.topicId)
            }

        default:
            return state
    }
    return state
}
export default topicReducer