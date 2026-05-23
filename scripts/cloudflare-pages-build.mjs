import { existsSync, copyFileSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const result = spawnSync('opennextjs-cloudflare', ['build'], {
  stdio: 'inherit',
  shell: true,
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

const workerPath = join(process.cwd(), '.open-next', 'worker.js');
const pagesWorkerPath = join(process.cwd(), '.open-next', '_worker.js');

if (!existsSync(workerPath)) {
  console.error('Expected .open-next/worker.js to exist after OpenNext build.');
  process.exit(1);
}

copyFileSync(workerPath, pagesWorkerPath);
console.log('Created .open-next/_worker.js for Cloudflare Pages.');
