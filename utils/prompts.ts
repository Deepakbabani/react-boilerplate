import inquirer from "inquirer";

async function promptForProjectName() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Enter the project name:",
      default: "project_without_name",
    },
  ]);
  return answers.projectName;
}

async function promptForUserName() {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "userName",
      message: "Enter your name:",
      default: "Anonymous",
    },
  ]);
  return answers.userName;
}

async function promptForStateManagement() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "stateManagement",
      message: "Choose state management:",
      choices: ["redux", "zustand", "jotai", "context-api"],
      default: "context-api",
    },
  ]);
  return answers.stateManagement;
}

export { promptForProjectName, promptForUserName, promptForStateManagement };
