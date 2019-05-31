/**
 * Created by zhongpeng on 2018/9/25.
 */
import  {
    ADD_TODO,
    TOGGLE_TODO,
} from '../actions/types'

const todos = (state = [], action) => {
   // Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State
    let {id, text, type} = action;
    switch (type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: id,
                    text: text,
                    completed: false
                }
            ];
        case TOGGLE_TODO:
            return state.map(todo => (todo.id === id) ? {...todo, completed: !todo.completed} : todo);
        default:
            return state;
    }
};

export default todos;