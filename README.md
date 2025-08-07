# Frontend

## Overview
This repository contains the frontend application for the project, built with React and Vite.

## Folder Structure

- `bootcamp/` - Main React app source code
- `public/` - Static assets
- `src/` - React components, styles, and assets
- `.github/workflows/` - CI/CD workflows

## Scripts

Run these commands from the `bootcamp` directory:

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm test` - Run integration tests

## CI/CD Workflows

- [Test Workflow](.github/workflows/test.yml): Runs tests on pull requests
- [Frontend Tests](.github/workflows/frontend-tests.yml): Runs tests on push and PR
- [Build, Push, Scan, Deploy](.github/workflows/docker-deploy.yml): Full pipeline from build to deployment

## Docker

Build and run the frontend Docker image:

```sh
docker build -t frontend:latest bootcamp
docker run -d -p 80:80 frontend:latest
```

## Vulnerability Scanning

Trivy scan is included in the CI pipeline. See the Actions tab for reports.

## Deployment

Deployment is automated via GitHub Actions and SSH. See `.github/workflows/docker-deploy.yml` for details.

## Useful Links

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Trivy](https://aquasecurity.github.io/trivy/)

## Setup Instructions

1. Clone the repo
2. Run `npm install` in `bootcamp`
3. Use scripts above to develop, test, and build
4. Push to `main` to trigger CI/CD