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
}

module.exports = ProblemService;