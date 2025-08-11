const { makdownSanitizer } = require("../utils");

class ProblemService {

    constructor(ProblemRepository){
        this.ProblemRepository = ProblemRepository;
    }

    async createProblem(problemData){
        try{
            problemData.description = makdownSanitizer(problemData.description);
            const problem = await this.ProblemRepository.createProblem(problemData);
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    };

    async getAllProblems(){
        try{
            const problems = await this.ProblemRepository.getAllProblems();
            return problems;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    };

    async getProblem(problemId){
        try{
            const problem = await this.ProblemRepository.getProblem(problemId);
            return problem;
        }
        catch(error){
            console.log(error);
            throw error;
        }
    };

    async deleteProblem(problemId){
        try{
            const problem = await this.ProblemRepository.deleteProblem(problemId);
            return problem;
        }
        catch (error){
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemService;