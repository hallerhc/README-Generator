
const questions = [
    {
        type: "input", 
        name: "title",
        message: "What is the title of your project?",
    },
    {   
        type: "input", 
        name: "description",
        message: "Please give a brief description of your project",
    },
    {
        type: "input", 
        name: "installation",
        message: "Any installation instructions?",
    },
    {
        type: "input", 
        name: "usage",
        message: "How do you use your project?",
    },
    {
        type: "input", 
        name: "contribution",
        message: "How to contribute?",
    },
    {
        type: "input", 
        name: "test",
        message: "Project tests?",
    },
    {
        type: "list", 
        name: "license",
        message: "Project license?",
        choices: ['Apache', 'BSD', 'MIT', 'None']
    },
    {
        type: "input", 
        name: "github",
        message: "What is your github username?",
    },
    {
        type: "input", 
        name: "email",
        message: "User email?",
    },

   
];

module.exports=questions 