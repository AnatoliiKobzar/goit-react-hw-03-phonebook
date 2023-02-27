import { Component } from 'react';
import { Button } from 'components/ContactForm/ContactForm.styled';
import {
  ButtonsWrap,
  Contact,
  Info,
  LabelInfo,
  Wrap,
} from './ContactList.styled';
import PropTypes from 'prop-types';
import { SlUserUnfollow, SlPhone, SlSocialGithub } from 'react-icons/sl';
import { FiEdit3, FiCheckCircle } from 'react-icons/fi';

export class ContactListItem extends Component {
  state = {
    name: this.props.contact.name,
    number: this.props.contact.number,
    isEdit: false,
  };

  handleEditContact = () => {
    if (!this.state.isEdit) {
      this.setState({ isEdit: true });
    } else {
      this.setState({ isEdit: false });
      this.props.editContact({
        id: this.props.contact.id,
        name: this.state.name,
        number: this.state.number,
      });
    }
  };

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  render() {
    const { contact, onDelete } = this.props;
    return (
      <Contact key={contact.id}>
        <Wrap>
          {this.state.isEdit ? (
            <LabelInfo>
              <SlSocialGithub size="20px" />
              <input
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                onChange={this.handleChange}
                value={this.state.name}
                type="text"
              />
            </LabelInfo>
          ) : (
            <Info>
              <SlSocialGithub size="20px" />
              {contact.name}:
            </Info>
          )}
          {this.state.isEdit ? (
            <LabelInfo>
              <SlPhone size="20px" />
              <input
                name="number"
                onChange={this.handleChange}
                value={this.state.number}
                type="text"
              />
            </LabelInfo>
          ) : (
            <Info>
              <SlPhone size="20px" />
              {contact.number}
            </Info>
          )}
          {/* <Info>
            <SlSocialGithub size="18px" />
            {contact.name}:
          </Info>
          <Info>
            <SlPhone size="18px" />
            {contact.number}
          </Info> */}
        </Wrap>
        <ButtonsWrap>
          <Button
            type="button"
            onClick={() => {
              onDelete(contact.id);
            }}
          >
            <SlUserUnfollow size="18px" />
          </Button>
          <Button type="button" onClick={this.handleEditContact}>
            {this.state.isEdit ? (
              <FiCheckCircle size="18px" />
            ) : (
              <FiEdit3 size="18px" />
            )}
          </Button>
        </ButtonsWrap>
      </Contact>
    );
  }
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};
