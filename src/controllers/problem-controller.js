const { StatusCodes } = require('http-status-codes');
const { ProblemRepository } = require('../repositories');
const { ProblemService } = require('../services');

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req , res, next){
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    }
    catch(error){
        next(error);
    }
};

async function getProblem(req, res, next){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully fetched a problem',
            error: {},
            data: problem
        })
    } 
    catch (error) {
        next(error);
    }
};

async function getProblems(req , res, next){
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        });
    }
    catch (error){
        next(error);
    }
};

function updateProblem(req , res, next){

};

function deleteProblem(req , res, next){

};

module.exports = { 
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}