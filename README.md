# Running news-aggregator with Docker

This guide will walk you through the steps to run the news-aggregator application within a Docker container.

## Prerequisites

- Docker installed on your system. You can download and install Docker from [here](https://www.docker.com/get-started).

## Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/idrees04/news-aggregator.git
    ```

2. Navigate to the project directory:

    ```bash
    cd news-aggregator
    ```

3. Build the Docker image:

    ```bash
    docker build -t news-aggregator .
    ```

4. Run the Docker container:

    ```bash
    docker run -p 8080:80 news-aggregator
    ```

   This command will start the Docker container and map port 80 of the container to port 8080 of your host machine. You can now access the application by navigating to `http://localhost:8080` in your web browser.

   **Note**: If port 8080 is already in use on your system, you can specify a different port number in the command. For example:

   ```bash
   docker run -p 8888:80 news-aggregator

## Notes

- If you need to customize any environment variables or Nginx configurations, you can modify the Dockerfile and nginx/nginx.conf files accordingly before building the Docker image.

- You can stop the Docker container by pressing `Ctrl + C` in the terminal where it's running. Alternatively, you can run the command `docker stop <container-id>` to stop it.

- If you encounter any issues, feel free to open an issue on the repository or reach out for support.

Happy news browsing!
