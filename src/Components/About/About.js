import React, {Component} from 'react'
let testImage = require('../../Assets/default_img.png')

class About extends Component {

  render () {
    return (
      <div className = 'about_main'>
        <section>
          <h1>This is the about page</h1>
          <div>
            <h2>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo repudiandae! Velit repudiandae, culpa odit quibusdam nam assumenda quis eveniet, voluptas, distinctio provident soluta debitis optio tempora! Minus, harum eaque?
              Sunt, sapiente omnis, suscipit optio quo numquam debitis quisquam voluptatum quibusdam ad harum veniam sequi? Sapiente tempora mollitia omnis quos quis unde expedita, quae pariatur, doloremque maiores suscipit, atque nulla.
              Quae harum ab delectus beatae suscipit impedit, modi non ex optio eaque id ullam aut, sunt repudiandae nisi? Ad expedita explicabo architecto sapiente voluptas atque, rem aperiam dolor fugiat asperiores.
            </p>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo repudiandae! Velit repudiandae, culpa odit quibusdam nam assumenda quis eveniet, voluptas, distinctio provident soluta debitis optio tempora! Minus, harum eaque?
              Sunt, sapiente omnis, suscipit optio quo numquam debitis quisquam voluptatum quibusdam ad harum veniam sequi? Sapiente tempora mollitia omnis quos quis unde expedita, quae pariatur, doloremque maiores suscipit, atque nulla.
              Quae harum ab delectus beatae suscipit impedit, modi non ex optio eaque id ullam aut, sunt repudiandae nisi? Ad expedita explicabo architecto sapiente voluptas atque, rem aperiam dolor fugiat asperiores.
            </p>
          </div>
          <div>
            <h2>
              Lorem ipsum dolor sit amet.
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, illo repudiandae! Velit repudiandae, culpa odit quibusdam nam assumenda quis eveniet, voluptas, distinctio provident soluta debitis optio tempora! Minus, harum eaque?
              Sunt, sapiente omnis, suscipit optio quo numquam debitis quisquam voluptatum quibusdam ad harum veniam sequi? Sapiente tempora mollitia omnis quos quis unde expedita, quae pariatur, doloremque maiores suscipit, atque nulla.
              Quae harum ab delectus beatae suscipit impedit, modi non ex optio eaque id ullam aut, sunt repudiandae nisi? Ad expedita explicabo architecto sapiente voluptas atque, rem aperiam dolor fugiat asperiores.
            </p>
          </div>
        </section>
        <section>
          <img src={testImage} alt=""/>
        </section>
      </div>
    )
  }

}

export default About