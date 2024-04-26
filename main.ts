import inquirer from 'inquirer';
import chalk from 'chalk';

let nida: any[] = [];

async function promptUser() {
    console.log(chalk.yellow("Welcome to the subject selection portal!"));

    let answers = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: chalk.cyan("What is your name?")
        },
        {
            name: "fname",
            type: "input",
            message: chalk.cyan("What is your Father's name?")
        },
        {
            name: "age",
            type: "input",
            message: chalk.cyan("What is your age?")
        },
        {
            name: "sub",
            type: "input",
            message: chalk.cyan("Which subject do you want to choose?")
        }
    ]);

    nida.push({
        name: answers.name,
        fname: answers.fname,
        age: answers.age,
        subject: answers.sub
    });

    console.log(chalk.green("Your details have been recorded."));

    let answer2 = await inquirer.prompt([
        {
            name: "confirm",
            type: "confirm",
            message: chalk.yellow("Do you want to add more subjects?")
        }
    ]);

    if (answer2.confirm) {
        let answerSubject = await inquirer.prompt([
            {
                name: "subject",
                type: "list",
                message: chalk.cyan("Which subject do you want to add?"),
                choices: [
                    ("Physics"),
                    ("Chemistry"),
                    ("Maths"),
                    ("Computer Science")
                ]
            }
        ]);

        nida.push({
            subject: answerSubject.subject
        });

        console.log(chalk.green("Updated information after adding subject:"));
        console.log(nida);
    } else {
        console.log(chalk.yellow("Thank you for using the subject selection portal!"));

        // Print all the information stored in the nida array
        console.log(chalk.yellow("Here is the information you provided:"));
        console.log(JSON.stringify(nida, null, 2));
    }
}

promptUser();
