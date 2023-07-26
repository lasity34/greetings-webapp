import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("bjorn")
        assert.equal('Hello, bjorn', greeting.getMessage().message)
    })

    it('This should return an error if there is no name or language', function() {

        greeting.greetMessage("")
        greeting.setLanguage("")
        assert.equal('Please type in your name and select a language', greeting.getMessage().message)
    })


})