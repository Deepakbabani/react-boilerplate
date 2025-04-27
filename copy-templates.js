const fs = require("fs-extra");
const path = require("path");

const templatesDir = path.join(__dirname, "templates");
const distTemplatesDir = path.join(__dirname, "dist", "templates");

async function copyTemplates() {
  try {
    await fs.copy(templatesDir, distTemplatesDir);
    console.log("✔️ Templates copied to dist");
  } catch (err) {
    console.error("❌ Error copying templates: ", err);
  }
}

copyTemplates();
