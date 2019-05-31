/**
 * Created by zhongpeng on 2018/9/25.
 */
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { visibilityFilters } from '../global'

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = visibilityFilters;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case SHOW_ALL:
            return todos;
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};
//筛选新组建需要数据
//mapStateToProps 这个函数来指定如何把当前 Redux store state 映射到展示组件的 props 中。例如，VisibleTodoList 需要计算传到 TodoList 中的 todos，所以定义了根据 state.visibilityFilter 来过滤 state.todos 的方法，并在 mapStateToProps 中使用

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});
//把方法传给新的组件
//容器组件还能分发 action。类似的方式，可以定义 mapDispatchToProps() 方法接收 dispatch() 方法并返回期望注入到展示组件的 props 中的回调方法。
const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
});
//把数据方法传给组件TodoList
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList)