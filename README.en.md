# INIActors Official Website
[Japanese](README.md)  

## Environment Setup
For WSL, macOS
1. Cloning this repository  
[Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) with GitHub Desktop or CLI to your local device.  

2. Installing Node.js   
Download Node.js installer from [here](https://nodejs.org/en/) and install Node.js.  
The version of Node.js is described in  `.node-version` file.  
If you're familiar with Node.js, you can use [nodenv](https://github.com/nodenv/nodenv), [nvm](https://github.com/nvm-sh/nvm) or [n](https://github.com/tj/n).  

3. Library setup  
Run below command in this directory.  
    ```shell
    npm install
    ```

## Development
- To launch dev server, run below command.  
    ```shell
    npm run dev
    ```
- This website uses Vue 3
- Basically, this website should use LTS version of Node.js.

## Deployment
When you push to the `main` branch, GitHub Actions will automatically build the files and push them to `gh-pages` branch. Then, they’ll be deployed with GitHub Pages.

## License
Apache License 2.0（except for images and videos）