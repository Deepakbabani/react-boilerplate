#!/usr/bin/env node

import {
  promptForProjectName,
  promptForUserName,
  promptForStateManagement,
} from "../utils/prompts";
import { copyTemplate } from "../utils/fileUtils";
import { installDependencies } from "../utils/installUtils";
import { deleteFolderRecursive } from "../utils/gitUtils";
import fs from "fs";
import path from "path";

async function createProject() {
  try {
    console.log("🚀 Starting project setup...");

    const projectName = await promptForProjectName();
    const userName = await promptForUserName();
    const stateManagementChoice = await promptForStateManagement();

    const projectPath = path.join(process.cwd(), projectName);

    if (!fs.existsSync(projectPath)) {
      console.log(`📂 Creating project directory: ${projectName}`);
      fs.mkdirSync(projectPath);
    }

    console.log("\n🔧 Installing required dependencies...");

    // Installing required dependencies for each template
    await installDependencies(projectName, stateManagementChoice);

    console.log("\n📂 Copying template files...");
    // Template according to user input
    await copyTemplate(projectName, userName, stateManagementChoice);

    deleteFolderRecursive("./code");

    console.log("\n✅ Project setup complete!");
    console.log(`\n👉 Commands to run your project:`);
    console.log(`cd ${projectName}`);
    console.log(`npm i`);
    console.log(`npm run dev\n`);
    console.log("🚀 This project was crafted with 💙 by Deepak Babani 🚀");
  } catch (error) {
    console.error("❌ Something went wrong during the setup process.");
    console.error(error);
    process.exit(1); // Exit with failure
  }
}

createProject();
