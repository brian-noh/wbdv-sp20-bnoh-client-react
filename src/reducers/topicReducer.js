const initialState = {

    topics : [
        {_id : "123", title: "Topic 1" },
        {_id : "234", title: "Topic 2"},
        {_id : "345", title: "Topic 3"},

    ]
}

const topicReducer = (state = initialState, action) => {
    switch (action.type) {



        case "CREATE_TOPIC" :
            return {
                topics: [
                    ...state.topics,
                    action.topic
                ]
            }
        case "FIND_TOPICS_FOR_LESSONS":
            return {
                topics: action.topics
            }


        case "FIND_ALL_TOPICS":
            return {
                topics: action.topics
            }

        default:
            return state
    }
    return state
}
export default topicReducer