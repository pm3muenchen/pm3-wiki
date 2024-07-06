# Stage 1: Base Image
FROM node:lts as base
## Disable color output
ENV FORCE_COLOR=0
## Enable corepack
RUN corepack enable
## Set the working directory
WORKDIR /opt/docusaurus

# Stage 2a: Developmen mode
FROM base as dev
## Set the working directory of DEV mode
WORKDIR /opt/docusaurus
## Expose the port that Docusaurus will run on
EXPOSE 3000
## Run the development server
CMD [ -d "node_modules" ] && npm run start --host 0.0.0.0 --poll 1000 || npm run install && npm run start --host 0.0.0.0 --poll 1000

# Stage 2b: Production build mode
FROM base as prod
## Set the working directory for prod
WORKDIR /opt/docusaurus
## Copy over the source code
COPY . /opt/docusaurus/
## Install dependencies with '--immutable' to ensure reproducibility
RUN npm ci
## Build the static site
RUN npm run build

# Stage 3b: Serve with Caddy
FROM caddy:2-alpine as caddy
## Copy the Cadddyfile
COPY --from=prod /opt/docusaurus/Caddyfile /etc/caddy/Caddyfile
## Copy the Docusaurus build output
COPY --from=prod /opt/docusaurus/build /var/docusaurus