import { FilterWrapper } from "./FilterStyled";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { changeFilter } from '../../redux/actions';

const FIlter = ({ filter, onChange }) => {
    return (
        <FilterWrapper>
            Find contact by name
            <input className="input" type="text" value={filter} onChange={onChange} />
        </FilterWrapper>
    );
}

const mapStateToProps = (state) => ({
    filter: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (event) => dispatch(changeFilter(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(FIlter);

FIlter.propTypes = {
    filter: PropTypes.string,
    onChange: PropTypes.func,
}