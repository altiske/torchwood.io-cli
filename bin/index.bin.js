#!/usr/bin/env node

// binary file (global): will execute torchwood.io that is locally installed

const fs = require("fs");
const path = require("path");
const process = require("process");
const chalk = require("chalk");

const { exec } = require('child_process');

const torchwoodPath = process.cwd()+"/node_modules/torchwood.io/index.js";

if (fs.existsSync(torchwoodPath)) {
  require(torchwoodPath);
} else {
  console.error(chalk.red("tochwood.io insn't locally installed"));
  process.exit();
}