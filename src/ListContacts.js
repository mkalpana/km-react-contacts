import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  };

  static defaultProps = {
    contacts: []
  };

  render() {
    return (
      <ol className="contact-list">
        {
          props.contacts.map(contact => (
            <li key={contact.id} className="contact-list-item">
              <div className="contact-avatar" style={{
                backgroundImage: `url(${contact.avatarURL})`
              }} />
              <div className="contact-details">
                <p>{contact.name}</p>
                <p>{contact.email}</p>
              </div>
              <button
                className="contact-remove"
                onClick={() => props.onDeleteContact(contact)}
              >Remove
              </button>
            </li>
          ))
        }
      </ol>
    );
  }
}

export default ListContacts;
