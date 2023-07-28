import assert from 'assert'
import Greeting from '../greet.js'

describe('Greeting function', function() {

    const greeting = Greeting()

    it('This should return a greeting after the name is entered', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("bjorn")
        assert.equal('Hello, bjorn', greeting.getMessage().message)
    })

    it('This should return an error if there is no name or language', function() {

        greeting.setLanguage("")
        greeting.greetMessage("")
        assert.equal('Please type in your name and select a language', greeting.getMessage().message)
    })
    
    it('This should return an error if there is no name ', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("")
        assert.equal('Please type in your name', greeting.getMessage().message)
    })
    it('This should return an error if there is no language selected ', function() {

        greeting.setLanguage("")
        greeting.greetMessage("Bjorn")
        assert.equal('Please select a language', greeting.getMessage().message)
    })
    it('This should return a greeting in English ', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("Bjorn")
        assert.equal('Hello, Bjorn', greeting.getMessage().message)
    })
    it('This should return a greeting in Spanish ', function() {

        greeting.setLanguage("Spanish")
        greeting.greetMessage("Jen")
        assert.equal('Ola, Jen', greeting.getMessage().message)
    })
    it('This should return a greeting in Welsh ', function() {

        greeting.setLanguage("Welsh")
        greeting.greetMessage("Bruce")
        assert.equal('Shwmae, Bruce', greeting.getMessage().message)
    })
    it('Values should reset when reset ic clicked ', function() {

        greeting.setLanguage("Welsh")
        greeting.greetMessage("Bruce")
        greeting.getCount()
        greeting.reset()
        assert.equal(0, greeting.getCount())
    })

})

describe('Counter', function() {

    const greeting = Greeting()

    it('This should test the count', function() {

        greeting.setLanguage("English")
        greeting.greetMessage("bjorn")
        assert.equal(1, greeting.getCount())
    })
})