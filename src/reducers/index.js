export default function movies(state = [], action){
    if(action.type === 'ADD_MOVIES')
    {
        return action.mvies;
    }

    return state;
}