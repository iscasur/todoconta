import React from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class MailchimpComponent extends React.Component {
  state = {
    name: null,
    email: null,
  }

  _handleChange = e => {
    console.log({
      [`${e.target.name}`]: e.target.value,
    })
    this.setState({
      [`${e.target.name}`]: e.target.value,
    })
  }

  _handleSubmit = e => {
    e.preventDefault();

    console.log('submit', this.state)

    addToMailchimp(this.state.email, this.state) // listFields are optional if you are only capturing the email address.
      .then(({ msg, result }) => {
        console.log('msg', `${result}: ${msg}`)

        if (result !== 'success') {
          throw msg
        }

        alert(msg)
      })
      .catch(err => {
        console.log('err', err)
        alert(err)
      })
  }

  render() {
    return (
      <>
        <h3>Suscríbete</h3>
        <p>Regístrate y recibe nuestro contenido para liberarte del estrés del despacho y cumplir con todas tus actividades.</p>
        <form onSubmit={this._handleSubmit}>
          <input type="text" onChange={this._handleChange} placeholder="Nombre" name="name" />
          <input type="email" onChange={this._handleChange} placeholder="Correo electrónico" name="email" />
          <input type="submit" />
          <p><small>Puedes darte de baja en cualquier momento, sin resentimientos</small></p>
        </form>
      </>
    )
  }
}