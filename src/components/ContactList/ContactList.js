import ContactsItem from "../ContactsItem";
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.items);
  const filter = useSelector(state => state.filter);

  const getFiltredContacts = () => {
    return filter
      ? contacts.filter(({ name }) =>
          name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;
  };

  const filtredContacts = getFiltredContacts();

  return (
    <ul>
      {filtredContacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          name={name}
          id={id}
          number={number}
        />
      ))}
    </ul>
  );
};

export default ContactList;


