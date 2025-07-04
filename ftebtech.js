#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const os = require('os');

const args = process.argv.slice(2);

const isWin = os.platform() === 'win32';
const reactScriptsCmd = isWin
  ? path.join('node_modules', '.bin', 'react-scripts.cmd')
  : path.join('node_modules', '.bin', 'react-scripts');

const child = spawn(reactScriptsCmd, args, { stdio: 'inherit', shell: true });

child.on('exit', function(code) {
  process.exit(code);
});
child.on('error', function(err) {
  console.error('Failed to start react-scripts:', err);
  process.exit(1);
});