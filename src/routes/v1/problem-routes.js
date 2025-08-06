const express = require('express');

const { ProblemController } = require('../../controllers');

const problemRouter = express.Router();

problemRouter.post('/', ProblemController.addProblem);
problemRouter.get('/:id', ProblemController.getProblem);
problemRouter.get('/', ProblemController.getProblems);
problemRouter.put('/:id', ProblemController.updateProblem);
problemRouter.delete('/:id', ProblemController.deleteProblem);

module.exports = problemRouter;