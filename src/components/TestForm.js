import React from 'react'

class TestForm extends React.Component {
  state = {
    text: '',
    checkboxes: [
      { id: 0, label: 'Checkbox label 1', value: 'chb-1', done: true },
      { id: 1, label: 'Checkbox label 2', value: 'chb-2',done: false },
      { id: 2, label: 'Checkbox label 3', value: 'chb-3', done: false }
    ],
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }

  handleCheckChange = (i) => {
    let { checkboxes } = this.state
    checkboxes.forEach(checkbox => {
      if(checkbox.id === i) {
        checkbox.done = !checkbox.done
      }
    })
    this.setState({checkboxes: checkboxes})
  }

  onBtnClickHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    fetch(`/test-form?params=${JSON.stringify(this.state)}`)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  validate = () => {
    const { text } = this.state
    if (text.trim()) {
      return true
    }
    return false
  }

  render() {
    const { text, checkboxes } = this.state

    return (
      <div className="loginForm">
        <h1>Test Form</h1>
        <form>
          <input
            type='text'
            id="text"
            onChange={this.handleChange}
            className='text'
            placeholder='Your Text'
            value={text}
          />
          <ul>
            {checkboxes.map((item, i) => {
              return <li key={i}><label><input type="checkbox" value={item.value} checked={item.done} onChange={this.handleCheckChange.bind(this, i)} /> {item.label}</label></li>
            })}
          </ul>
          <button
            className='login__btn'
            disabled={!this.validate()}
            onClick={this.onBtnClickHandler}>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default TestForm