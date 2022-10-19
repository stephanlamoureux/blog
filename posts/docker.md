---
title: 'Docker: Up and Running on WSL'
date: '2022-10-18'
---

OUTLINE ONLY, STILL WIP

Docker is a tool to run applications in isolated containers, similar to the way that virtual machines work. Unlike virtual machines, however, Docker will use the kernel from the system it's running on instead of creating an entire virtual operating system. This drastically reduces the file size of the app while improving performance. Containers allow you to bundle an app with all the necessary dependencies into a single package, ensuring it will run the same on any system, contrary to the "works on my machine" rationality.

## ✅ Requirements

- Windows 10 version 2004 or higher / Windows 11
- WSL2
- Install the [Linux kernel update package](https://learn.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

---

## 🐳 Installing Docker Desktop

- https://www.docker.com/products/docker-desktop/
- Create account
- Screenshots

Download Docker Desktop and follow the installation instructions.

Once installed, start Docker Desktop from the Windows Start menu, then select the Docker icon from the hidden icons menu of your taskbar. Right-click the icon to display the Docker commands menu and select "Settings". Docker Desktop dashboard icon

Ensure that "Use the WSL 2 based engine" is checked in Settings > General. Docker Desktop general settings

Select from your installed WSL 2 distributions which you want to enable Docker integration on by going to: Settings > Resources > WSL Integration. Docker Desktop resource settings

To confirm that Docker has been installed, open a WSL distribution (e.g. Ubuntu) and display the version and build number by entering: `docker --version`

Test that your installation works correctly by running a simple built-in Docker image using: `docker run hello-world`

---

## ⌨️ Basic Commands

- List the commands available in the Docker CLI by entering: docker
- List information for a specific command with: docker <COMMAND> --help
- List the docker images on your machine (which is just the hello-world image at this point), with: docker image ls --all
- List the containers on your machine, with: docker container ls --all or docker ps -a (without the -a show all flag, only running containers will be displayed)
- List system-wide information regarding the Docker installation, including statistics and resources (CPU & memory) available to you in the WSL 2 context, with: docker info

---

## 🇺🇸 Using the VWC VS Code Container

### Requirements

Install the VS Code Remote-WSL extension. This extension enables you to open your Linux project running on WSL in VS Code (no need to worry about pathing issues, binary compatibility, or other cross-OS challenges).

Install the VS code Remote-Containers extension. This extension enables you to open your project folder or repo inside of a container, taking advantage of Visual Studio Code's full feature set to do your development work within the container.

Install the VS Code Docker extension. This extension adds the functionality to build, manage, and deploy containerized applications from inside VS Code. (You need the Remote-Container extension to actually use the container as your dev environment.)

---

## 🧑‍💻 Creating Your Own VS Code Dev Container

---

## 📚 References

- https://docs.docker.com/desktop/windows/wsl/

- https://andrewlock.net/installing-docker-desktop-for-windows/

- https://learn.microsoft.com/en-us/windows/wsl/tutorials/wsl-containers
