import { connect } from 'react-redux';
import Counter from '../components/Counter';

import { addTodo, rmTodo } from '../actions';

const mapStateToProps = (state) =>({
    counter: state
});

const mapDispatchToProps = (dispatch) =>({
    increase: () => dispatch(addTodo()),
    decrease: () => dispatch(rmTodo()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);