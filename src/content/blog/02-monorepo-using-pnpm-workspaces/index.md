---
title: "How to setup a monorepo using pnpm workspaces"
description: "Complete guide to setting up a monorepo using pnpm workspaces, including configuration, best practices, and troubleshooting tips."
date: "2024-12-18"
---

# Setting Up a Monorepo with pnpm Workspaces

I love [pnpm workspaces](https://pnpm.io/workspaces), It makes code sharing so easy and less painful. Here's how to set one up step by step.

## Why pnpm?

You might be wondering why pnpm instead of npm or yarn. The main advantages are:

- **Disk space efficiency**: pnpm uses a content-addressable store for dependencies, so you don’t end up duplicating packages across projects.
- **Speed**: With its symlink-based approach, installing dependencies is often faster.
- **Workspaces support**: pnpm makes managing multiple packages in a monorepo simple and clean.

## Step 1: Create Your Monorepo Folder

First, create a folder for your monorepo and initialize it:

```bash
mkdir my-monorepo
cd my-monorepo
pnpm init
```

This will create a `package.json` at the root, which will hold shared dependencies and scripts.

## Step 2: Configure pnpm Workspaces

Create a `pnpm-workspace.yaml` file in your root directory:

```yaml
packages:
  - "packages/*"
```

This tells pnpm to treat every folder under `packages` as a separate workspace package. The `pnpm-workspace.yaml` file keeps workspace configuration clean and separate from your package metadata.

## Step 3: Create Your Packages

Now, let’s create a couple of example packages:

```bash
mkdir -p packages/app
mkdir -p packages/ui
```

Inside each folder, initialize a new package:

```bash
cd packages/app
pnpm init
cd ../ui
pnpm init
```

At this point, your folder structure should look like this:

```
my-monorepo/
├─ package.json
├─ pnpm-workspace.yaml
└─ packages/
   ├─ app/
   │  └─ package.json
   └─ ui/
      └─ package.json
```

## Step 4: Link Dependencies Between Packages

One of the perks of a monorepo is that you can use your own packages as dependencies without publishing them.

For example, if `app` needs `ui`, open `packages/app/package.json` and add:

```json
{
  "dependencies": {
    "ui": "workspace:*"
  }
}
```

Then run:

```bash
pnpm install
```

pnpm will automatically symlink the `ui` package into `app`, so you can import it just like any other npm package.

## Step 5: Adding Dependencies to Specific Packages

When working with workspaces, you'll often need to add dependencies to specific packages. pnpm's `--filter` flag makes this easy:

```bash
# Add a dependency to a specific package
pnpm add react --filter app

# Add a dev dependency
pnpm add -D typescript --filter ui

# Add to multiple packages
pnpm add lodash --filter "app" --filter "ui"

# Run scripts for specific packages
pnpm run build --filter ui
pnpm run test --filter "!app"  # Run tests for all packages except app
```

## Best Practices

### Manage Shared Dependencies at Root Level

For dependencies used across multiple packages (like TypeScript, ESLint), install them at the root:

```bash
pnpm add -D typescript eslint --workspace-root
```

### Use Consistent Naming

Consider prefixing your packages with a scope:

```json
// packages/ui/package.json
{
  "name": "@mycompany/ui"
}

// packages/app/package.json
{
  "name": "@mycompany/app"
}
```

## Troubleshooting

### Peer Dependency Issues

If you encounter peer dependency warnings, you can use `.pnpmrc` to configure hoisting:

```
hoist-pattern[]=*eslint*
hoist-pattern[]=*prettier*
```

### TypeScript Path Mapping

For TypeScript projects, update your `tsconfig.json` to resolve workspace packages:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@mycompany/*": ["packages/*/src"]
    }
  }
}
```

### Cache Issues

If you're experiencing strange behavior, try clearing pnpm's cache:

```bash
pnpm store prune
```
