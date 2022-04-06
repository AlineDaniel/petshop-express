const ControllerPets = {
    index: (req, res) => {
        res.send(['Marquinhos', 'Pedrinho', 'Frajola'])
    }
}

module.exports = ControllerPets;