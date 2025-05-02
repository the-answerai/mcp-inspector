# Using pnpm with MCP Inspector

This project now uses [pnpm](https://pnpm.io/) as its package manager. pnpm offers several advantages:

- Faster installation times
- Disk space efficiency through content-addressable storage
- Strict dependency resolution

## Setup

1. Install pnpm globally if you haven't already:
   ```bash
   npm install -g pnpm
   ```

2. Run the conversion script (if converting from npm):
   ```bash
   ./convert-to-pnpm.sh
   ```

## Common Commands

- Install dependencies:
  ```bash
  pnpm install
  ```

- Run development server:
  ```bash
  pnpm dev
  ```

- Build all packages:
  ```bash
  pnpm build
  ```

- Run tests:
  ```bash
  pnpm test
  ```

## Workspace Commands

- Install a dependency to a specific workspace:
  ```bash
  pnpm --filter <package-name> add <dependency>
  ```
  For example:
  ```bash
  pnpm --filter @modelcontextprotocol/inspector-client add lodash
  ```

- Run a command in a specific workspace:
  ```bash
  pnpm --filter <package-name> <command>
  ```
  For example:
  ```bash
  pnpm --filter @modelcontextprotocol/inspector-client build
  ```

## Additional Resources

- [pnpm documentation](https://pnpm.io/motivation)
- [pnpm workspace guide](https://pnpm.io/workspaces)