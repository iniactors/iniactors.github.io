# INIActors Official Website
[Japanese](README.md)  

## Environment Setup
1. Cloning this repository  
[Clone](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) with GitHub Desktop or CLI to your local device.  

2. Launching dev server   
To launch dev server, run below command.  
    ```shell
    python3 serve.py
    ```  
    Or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). (Recommend)

## Deployment
When you push to the `main` branch, GitHub Actions will automatically minify the files and push them to `gh-pages` branch. Then, they’ll be deployed with GitHub Pages.

## Development Memo
- Use basic web technology learned in INIAD classes.
- Create a webp version of the image using [this site](https://lab.syncer.jp/Tool/Webp-Converter/) and reduce the size.

## License
Apache License 2.0（except for images and videos）