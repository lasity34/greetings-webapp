import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', function() {

        greeting.greetMessage("Bjorn")

        assert.equal('Hello, Bjorn', greeting.getMessage())
    })


})