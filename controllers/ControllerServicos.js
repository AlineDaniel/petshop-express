const ControllerServicos = {
    index: (req, res) => {
        res.send(['banho', 'tosa', 'castração'])
    }
}

module.exports = ControllerServicos;