const validator = require('html-validator');
const { readFileSync } = require('fs');
function validate(page) {
    (async () => {
        const options = {
            data: page,
            format: 'text'
        }

        try {
            const result = await validator(options)
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    })()
}
validate('../pages/index.html');
validate('./pages/info.html');
