export default function Greeting() {


    let message = ''


    function greetMessage(name) {

        if(name.name && /^[a-zA-Z]+$/.test(name.name)) {
            message = `Hello, ${name.name}`
        } else {
            message = "Invalid input. Please use only letters and ensure the input is not blank.";
        }
    }

    function getMessage() {
        return {message: message}
    }

    return {
        greetMessage,
        getMessage
    }

}