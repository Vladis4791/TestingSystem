import data from "../data/data";

class QuestionAPI {
    
    getQuestions() {

        return new Promise((res, rej) => {
            setTimeout(() => res(data), 400);
        });

        
    }

}

const questionAPI = new QuestionAPI();

export default questionAPI;