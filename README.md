# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Docker Deployment

There are a few approaches to dockerizing Docusaurus sites:
1. Build the site in a container with the output sent to a docker volume and then use another container running a web server (like Caddy or nginx) to serve the resulting static site.
2. Build the site in a container and run the serve process in the same container.
3. Run the `start` process in a container with the *local* source code folder mounted as a volume.

A dockerfile and dockercompose files are provided which will cover all three of the above approaches. You can choose which approach you want to use by passing `--target` option to the `docker build` command. Our dockerfile makes use of multi-stage builds to build the site.

## Exposing application outside container
In order to make the application accessible from outside the container (e.g. from your web browser), you'll want to set the `--host` option to `0.0.0.0`. This can be done from your package.json:

```
"scripts": {
    "docusaurus": "docusaurus",
    "start": "docusaurus start --host 0.0.0.0",
}
```

Or in your Dockerfile as an argument to your project's start command:

```
CMD ["npm", "start", "--", "--host", "0.0.0.0"]
```

## Building the Docker Image
To build the docker image you will need to run the following command:
```
docker buld --target <target> -t <tag> .
```

## Running the Docker Image
Depending on stage/target you will need to run the docker image differently.
### DEV
To run the `dev` target you will need to run the following command:
```
docker run --rm -d -p 3000:3000 -v $(pwd):/var/docusaurus <tag>
```
If using Powershell you will need to use `${pwd}` instead of `$(pwd)`. On some systems you may need to replace `$(pwd)` with `.` or the full path to the directory you want to mount.

### SERVE
To run the `serve` target you will ne to run the following command:
```
docker run --rm -d -p 3000:3000 <tag>
```

### CADDY
To run the `caddy` target you will ne to run the following command:
```
docker run --rm -d -p 80:80 -p 443:443 <tag>
```

## Docker Compose
Docker compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application's services.

To run the container using Compose you will need to run the following command:
```
docker compose --file <composefile> up -d --build
```
`--file <composefile>` is the path to the composefile, the path would be `./dev.docker-compose.yaml` for `dev` target, `./serve.docker-compose.yaml` for `serve` target and `./caddy.docker-compose.yaml` for the `caddy` target.
