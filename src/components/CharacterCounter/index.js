import {Component} from 'react'

import {v4 as uuidV4} from 'uuid'

import Characters from '../Characters'

import './index.css'

class CharacterCounter extends Component {
  state = {
    nameInput: '',
    characterList: [],
  }

  onChangeInput = event => {
    this.setState({nameInput: event.target.value})
  }

  submitButton = event => {
    event.preventDefault()
    const {nameInput} = this.state
    const count = nameInput.length
    const newCharacterCounter = {
      id: uuidV4(),
      name: nameInput,
      count,
    }
    this.setState(prevState => ({
      nameInput: '',
      characterList: [...prevState.characterList, newCharacterCounter],
    }))
  }

  render() {
    const {characterList, nameInput} = this.state
    const countsLength = characterList.length

    return (
      <div className="app-container">
        <div className="character-count-card">
          <div className="counts-card">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          <div>
            {countsLength > 0 ? (
            <ul className="ul-counter">
                {characterList.map(each => (
                  <Characters details={each} key={each.id} />
                ))}
            </ul>
              ) : (
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                    alt="no user inputs"
                    className="image"
                  />
                </div>
              )}
          </div>
          <div className="characters-inputs-card">
            <h1 className="character-heading">Character Counter</h1>
            <form className="input-card" onSubmit={this.submitButton}>
              <input
                className="input"
                type="text"
                placeholder="Enter the Characters here"
                onChange={this.onChangeInput}
                value={nameInput}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
