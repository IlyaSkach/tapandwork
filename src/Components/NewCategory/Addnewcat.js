import {connect} from 'react-redux';
import NewCategory from './NewCategory';

function mapStateToProps(state) {
    const { newcat } = state;

    return { new: newcat };
}

export default connect(
    mapStateToProps,
    null
)(NewCategory);