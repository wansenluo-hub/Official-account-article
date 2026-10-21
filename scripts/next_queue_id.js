#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function main() {
  const queueDir = process.argv[2];
  if (!queueDir) {
    console.error('Usage: node next_queue_id.js <queue-dir>');
    process.exit(1);
  }

  if (!fs.existsSync(queueDir) || !fs.statSync(queueDir).isDirectory()) {
    console.error(`Queue directory not found: ${queueDir}`);
    process.exit(1);
  }

  const names = fs.readdirSync(queueDir);
  let maxId = 0;

  for (const name of names) {
    const match = name.match(/^(\d{3})-.*\.md$/i);
    if (!match) continue;
    const id = Number(match[1]);
    if (id > maxId) maxId = id;
  }

  const nextId = String(maxId + 1).padStart(3, '0');
  process.stdout.write(nextId);
}

main();
