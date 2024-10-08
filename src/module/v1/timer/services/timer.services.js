const Timer = require('../../../../models/timer.model');

const timerGet = async () => {
    return await Timer.findOne({});
}

const timerSet = async (data) => {
    return await Timer.updateOne({}, data);
}

module.exports = { timerGet, timerSet }