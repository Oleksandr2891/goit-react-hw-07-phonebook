import { useDispatch, useSelector } from "react-redux";
import { FilterWrapper } from "./FilterStyled";
import PropTypes from "prop-types";
import { changeFilter } from "../../redux/contacts/contacts-actions";
import { getContactsFilter } from "../../redux/selector";

const FIlter = () => {
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  const onChange = (event) => dispatch(changeFilter(event.target.value));

  return (
    <FilterWrapper>
      Find contact by name
      <input className="input" type="text" value={filter} onChange={onChange} />
    </FilterWrapper>
  );
};
export default FIlter;

FIlter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
