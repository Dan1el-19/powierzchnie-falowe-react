import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(() => {
  const explicitBase = process.env.VITE_BASE;
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1];
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';

  const base =
    explicitBase ?? (isGitHubActions && repo ? `/${repo}/` : './');

  return {
    plugins: [react()],
    base,
  };
});