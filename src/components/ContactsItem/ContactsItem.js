import propTypes from "prop-types";
import { Contact, ContactWrapper } from "./ContactsItem.styled";
import { remove } from "redux/store";
import { useDispatch } from 'react-redux';
const ContactsItem = ({ id, name, number}) => {
  const dispatch = useDispatch();
  return (
    <Contact>
      <ContactWrapper>
        <span>{name}:</span>
        <span>{number} </span>
      </ContactWrapper>
      <button type="button" onClick={() => dispatch(remove(id))}>
        Delete
      </button>
    </Contact>
  );
};

export default ContactsItem;

ContactsItem.propTypes = {
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
