const trialService = require('../Services/trialsService');
exports.getAllTrials = async (req, res) => {
    try {
        const trials = await trialService.getAllTrial();
        res.json(trials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getTrialById = async (req, res) => {
    try {
        const { id } = req.params;
        const trial = await trialService.getTrialById(id);
        if (!trial) {
            return res.status(404).json({ error: 'Trial not found' });
        }
        res.json(trial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createTrial = async (req, res) => {
    try {
        const createdTrial = await trialService.createTrial(req.body,req.user._id);
        res.status(201).json(createdTrial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.updateTrial = async (req, res) => {
    try {
     
        const updatedTrial = await trialService.updateTrial(req.body,req.params.id);
        res.json(updatedTrial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.deleteTrial = async (req, res) => {
    try {
        await trialService.deleteTrial(req.params.id);
        res.json({ message: 'Trial deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
