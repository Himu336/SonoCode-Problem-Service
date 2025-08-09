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
}

function getProblem(req, res, next){

}

function getProblems(req , res, next){
    
}

function updateProblem(req , res, next){

}

function deleteProblem(req , res, next){

}

module.exports = { 
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem
}