import childProcess from "child_process";

function getStateDependencies(choice: string) {
  switch (choice) {
    case "zustand":
      return ["zustand"];
    case "jotai":
      return ["jotai"];
    case "redux":
      return ["@reduxjs/toolkit", "react-redux", "redux-persist"];
    case "context-api":
      return []; // No extra deps
    default:
      return [];
  }
}

async function installDependencies(
  projectName: string,
  stateManagementChoice: string
) {
  const deps = [
    "axios",
    "react-router-dom",
    "typescript",
    ...getStateDependencies(stateManagementChoice),
  ];

  console.log(`📦 Installing dependencies: ${deps.join(", ")}`);

  // Run npm install for dependencies
  await new Promise((resolve, reject) => {
    childProcess.exec(
      `cd ${projectName} && npm install ${deps.join(" ")}`,
      (err) => {
        if (err) {
          console.error("❌ Failed to install dependencies.", err);
          reject(err);
        } else {
          console.log("✅ Dependencies installed.");
          resolve("✅ Dependencies installed");
        }
      }
    );
  });
}

export { installDependencies };
