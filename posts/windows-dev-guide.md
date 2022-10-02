---
title: 'The Complete Windows Web Developer Setup Guide'
date: '2022-05-28'
---

## 🔭 Overview

After a lot of trial and error, I've been able to piece together a pretty respectable Windows dev environment. There are plenty of guides already out there, but none of them seem to cover the entire scope. I tried to do that here, without getting too deep into any individual topic. I believe this will leave the majority of users with a smooth Windows developer experience.

_The [repo](https://github.com/Vets-Who-Code/windows-dev-guide) for this guide contains some additional info and will be continually updated._

### Prerequisites

- Windows 10 version 2004 and higher (Build 19041 and higher) or Windows 11 [(Which version do I have?)](https://support.microsoft.com/en-us/topic/628bec99-476a-2c13-5296-9dd081cdd808)
- A [GitHub](https://github.com) account

&nbsp;

---

## 🐧 WSL

The first and most important part of setting up your Windows dev environment is installing the Windows Subsystem for Linux (WSL). I recommend sticking with Ubuntu, but feel free to try out as many distributions as you like. There are no issues with having multiple distributions installed at once.

### Installing WSL 2

WSL 2 is the latest version of WSL, adding new features like a full Linux kernel and full system call compatibility. There used to be a handful of steps needed to install it, but we now only need to enter the following command into PowerShell or Command Prompt:

```sh
wsl --install
```

This command does the following:

- Enables the optional WSL and Virtual Machine Platform components
- Downloads and installs the latest Linux kernel
- Sets WSL 2 as the default
- Downloads and installs the Ubuntu Linux distribution (a reboot may be required)

Using the `--install` command defaults to Ubuntu and only works if WSL is not installed yet. If you would like to change your default Linux distribution, [follow these docs](https://docs.microsoft.com/en-us/windows/wsl/install#change-the-default-Linux-distribution-installed).

### User Config

Once the process of installing your Linux distribution with WSL is complete, open the distribution (Ubuntu by default) using the Start menu. You will be asked to create a User Name and Password for your Linux distribution. When you enter your new password, nothing will display in the terminal. Your keyboard is still working! It is just a security feature.

- This User Name and Password is specific to each separate Linux distribution that you install and has no bearing on your Windows user name.

- Once you create a User Name and Password, the account will be your default user for the distribution and automatically sign-in on launch.

- This account will be considered the Linux administrator, with the ability to run sudo (Super User Do) administrative commands.

- Each Linux distribution running on WSL has its own Linux user accounts and passwords. You will have to configure a Linux user account every time you add a distribution, reinstall, or reset.

### Updating Linux

It is recommended that you regularly update and upgrade your packages. In Ubuntu or Debian, we use the `apt` package manager:

```sh
sudo apt update && sudo apt upgrade
```

Windows does not automatically update or upgrade your Linux distribution(s). This is a task that most Linux users prefer to control themselves.

### Mapping Your Linux Drive

When you open the Windows file explorer, it displays your devices and drives. We are going to add our Ubuntu virtual drive as a network location for easy access.

1. Open the `\\wsl$\` location from file explorer:

   ![File explorer search bar](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vpouje1q3pdemlgic9lm.jpg)

2. Right-click on the Ubuntu folder, and select `Map network drive`:

   ![Mapping network drive](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fzo894w02yt2494ds56o.jpg)

3. Select the drive letter you would like to use, leave `Reconnect at sign-in` checked and `Connect using different credentials` unchecked, and then click finish (mine will look slightly different because it's already been done):

   ![Mapping network drive](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6buxuwak7bdmdnv8fvwz.jpg)

4. The end result should look something like this:

   ![File explorer](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1ahqj416o6qnaxp6dzt2.jpg)

If you wanted to access your Windows files from the Linux terminal, they are found in the `/mnt/` directory, so your Windows user directory would be located at `/mnt/c/Users/username`.

With your Ubuntu drive mapped, you can easily drag/drop or copy/paste Windows files to the Linux file system by using the file explorer.

However, it is recommended to store your project files on the Linux file system. It will be much faster than accessing files from Windows and it can also be a little buggy.

#### Pin Your Code Directory

Another quick tip I have is to create a code directory inside of Ubuntu, and then pin it to the quick access menu found on the left side of the file explorer. This comes in handy when transferring files quickly between Windows and Linux.

1. Open file explorer and click on the Ubuntu network drive we created
1. Select the home dir, and then your user directory
1. Right-click and create a new folder, name it code, or anything else you'd like
1. Drag that new folder to the left, underneath the star icon that says `Quick access`

   ![My code directory](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c9ocnuvzqdhmkvy7gjc9.jpg)

### Restarting WSL

If for some reason WSL stops working, you can restart it with these two commands from PowerShell/Command Prompt:

```sh
wsl.exe --shutdown
wsl.exe
```

If you go back to your Linux shell everything should be back to normal.

&nbsp;

---

## 👨‍💻 Windows Terminal

To launch a Linux terminal we currently need to use the Ubuntu icon from the Start menu or enter the `wsl` or `bash` commands into PowerShell/Command Prompt. Another option that will give us more features like tabs, split views, themes, transparency, and key bindings, is to use the Windows Terminal. There are also a few other terminals like [Cmder](https://cmder.net/), [ConEmu](https://conemu.github.io/), or [Hyper](https://hyper.is/), but in my experience, Windows Terminal works extremely well.

### Installing Windows Terminal

Windows 11 comes with Windows Terminal by default, but If you are using Windows 10, Download and install Windows Terminal through the [Microsoft Store](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab).

### Terminal Settings

A couple of quick things I recommend setting up is the default profile and your starting home directory. These settings make it so launching Windows Terminal will open directly into WSL inside our user's home directory.

#### Default Profile

Windows Terminal will open a PowerShell or Command Prompt shell when launched by default, here is how to switch it to WSL:

1. Select the `˅` icon from Windows Terminal and go to the Settings menu:

   ![Windows terminal settings](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/khl7jyj0svhbh4mp2qqf.jpeg)

2. In the Startup section you will find the Default profile dropdown, select Ubuntu. Below it, select Windows Terminal as the Default terminal application:

   ![Default shell profile](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/32mpr2pao94165fy2n9q.jpeg)

#### Starting Directory

A default Ubuntu terminal will open to the root directory. To make finding your files a little quicker we can have it open into your home directory instead.

1. Under the Profiles section in the settings menu click on Ubuntu

1. At the General tab, you will find a Starting directory input

1. Enter the following replacing "username" with your Ubuntu user name: `\\wsl$\Ubuntu\home\username`

1. You can leave the `Use parent process directory` box unchecked

1. If it is still opening into your `/` directory, change the `Command line` setting located right above the `Starting directory` input box to the following: `wsl.exe -d Ubuntu`

   ![Starting directory in Ubuntu terminal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pin4mz9pffnb5j5gnu5j.jpeg)

There are many more settings to explore, and there is also a JSON file you can edit for more advanced customizations.

Check out [this guide](https://www.ubuntupit.com/best-windows-terminal-themes-and-color-schemes/) for some popular Windows Terminal themes and how to install them.

&nbsp;

---

## 📝 Git Config

Git should come pre-installed on most, if not all of the WSL Linux distributions. To ensure you have the latest version, use the following command in an Ubuntu or Debian based distro:

```sh
sudo apt install git
```

### Name

To set up your Git config file, open a WSL command line and set your name with this command (replacing "Your Name" with your preferred username):

```sh
git config --global user.name "Your Name"
```

### Email

Set your email with this command (replacing "youremail@domain.com" with the email you prefer):

```sh
git config --global user.email "youremail@domain.com"
```

### Username

And finally, add your GitHub username to link it to git (case sensitive!):

```sh
git config --global user.username "GitHub username"
```

Make sure you are inputting `user.username` and not `user.name` otherwise you will overwrite your name and you will not be correctly synced to your GitHub account.

You can double-check any of your settings by typing `git config --global user.name` and so on. To make any changes just type the necessary command again as in the examples above.

&nbsp;

---

## 😺 GitHub Credentials

### Creating your Personal Access Token

GitHub has removed the ability to use a conventional password when working in a remote repository. You are now required to create a personal access token instead.

> Personal access tokens (PATs) are an alternative to using passwords for authentication to GitHub when using the [GitHub API](https://docs.github.com/en/rest/overview/other-authentication-methods#via-oauth-and-personal-access-tokens) or the [command line](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#using-a-token-on-the-command-line).

Follow [these docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) for step-by-step instructions on creating your personal token.

### Git Credential Manager

Once you enter in your token the first time, it can be stored via [Git Credential Manager (GCM)](https://github.com/GitCredentialManager/git-credential-manager) so you won't have to authenticate yourself each time.

You can have Git installed in WSL and also in Windows at the same time. [Git for Windows](https://gitforwindows.org/) includes GCM and is the preferred way to install it.

![Windows Git Installer Menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ybd9zppcsghp91wzhpjk.png)

You can also download the [latest installer for Windows](https://github.com/GitCredentialManager/git-credential-manager/releases/latest) to install the GCM standalone version.

### Storing Your Token

Once Git Credential Manager is installed you can set it up for use with WSL. Open your WSL terminal and enter this command:

```sh
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager-core.exe"
```

Note:

If you ever receive the following error message:

```sh
/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager-core.exe store: 1:
/mnt/c/Program Files/Git/mingw64/libexec/git-core/git-credential-manager-core.exe: not found
```

Try using the this command:

```sh
git config --global credential.helper store
```

&nbsp;

---

## 💤 Zsh

Z shell works almost identically to the standard BASH shell found on default Linux installs. What makes it different is its support for plugins and themes, along with some extra features like spelling correction and recursive path expansion. It's time to throw BASH in the trash!

### Installing Zsh

Zsh can be installed with one command:

```sh
sudo apt install zsh
```

After installing, type the `zsh` command. Zsh will ask you to choose some configurations. We will do this later on while installing oh-my-zsh, so choose option `0` to create the config file and prevent this message from showing again.

### OhMyZsh

The most popular plugin framework by far is [OhMyZsh](https://ohmyz.sh/). It comes preloaded with loads of plugins, themes, helpers, and more. It can help with productivity for sure, but more importantly, it just looks cool 😎.

### cURL

First off, we need to make sure we have [cURL](https://curl.se/) installed. Short for "Client URL", it's a way to transfer data from the command line, and that's how we will download OhMyZsh.

```sh
sudo apt install curl
```

### Installing OhMyZsh

Enter the following command into your terminal to install OhMyZsh:

```sh
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

That's it! You should now see a `.oh-my-zsh` directory inside of your home directory. To change your plugins and themes you will need to edit your `.zshrc` file, also found in your home dir. Here is a list of all the [themes](https://github.com/ohmyzsh/ohmyzsh/wiki/Themes) and [plugins](https://github.com/ohmyzsh/ohmyzsh/wiki/Plugins) that come bundled with OhMyZsh.

### More Plugins

There are countless plugins available, but these are the two I recommend most.

#### [zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

Autosuggestions for zsh, It suggests commands as you type based on history and completions.

1. Clone this repository into `$ZSH_CUSTOM/plugins` (by default `~/.oh-my-zsh/custom/plugins`)

   ```sh
   git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
   ```

2. Add the plugin to the list of plugins for Oh My Zsh to load (inside `~/.zshrc`):

   ```sh
   plugins=(git zsh-autosuggestions)
   ```

3. Start a new terminal session.

#### [zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

This package provides syntax highlighting for the shell zsh. It enables highlighting of commands whilst they are typed at a zsh prompt into an interactive terminal. This helps in reviewing commands before running them, particularly in catching syntax errors.

1. Clone this repository in oh-my-zsh's plugins directory:

   ```sh
   git clone <https://github.com/zsh-users/zsh-syntax-highlighting.git> ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
   ```

2. Activate the plugin in `~/.zshrc`:

   ```sh
   plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
   ```

3. Start a new terminal session.

##### More

A huge list of plugins can be found at the [awesome zsh plugins repo](https://github.com/unixorn/awesome-zsh-plugins).

&nbsp;

---

## 📦 Node.js

Node.js is a JavaScript runtime environment that executes JavaScript code outside a web browser. It allows us to install packages, run local web servers, create APIs, and more.

### NVM

You will likely need to switch between multiple versions of Node.js based on the needs of different projects you're working on. Node Version Manager allows you to quickly install and use different versions of node via the command line.

#### Installing NVM

1. Open your Ubuntu command line and Install nvm with:

   ```sh
   curl -o- <https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh> | bash
   ```

   To verify installation, enter: `command -v nvm`. This should return 'nvm', if you receive 'command not found' or no response at all, close your current terminal, reopen it, and try again.

2. List which versions of Node are currently installed (should be none at this point):

   ```sh
   nvm ls
   ```

   ![Ubuntu terminal displaying node not installed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mqmjllptjplmqmh0t4pa.png)

3. Install both the current and stable LTS versions of Node.js.
   Install the current stable LTS release of Node.js (recommended for production applications):

   ```sh
   nvm install --lts
   ```

   Install the current release of Node.js (for testing latest Node.js features and improvements, but more likely to have issues):

   ```sh
   nvm install node
   ```

4. List what versions of Node are installed:

   ```sh
   nvm ls
   ```

Now you should see the two versions that you just installed listed.

![Ubuntu terminal displaying node installed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/z097kc8nettfyzf7qrak.png)

5. Verify that Node.js is installed and the current version:

   ```sh
   node --version
   ```

   Then verify that you have npm installed as well:

   ```sh
   npm --version
   ```

#### Changing Node Versions

Use the following commands to change the version of Node you would like to use for any given project:

_Switch to the Current version:_

```sh
nvm use node
```

_Switch to the LTS version:_

```sh
nvm use --lts
```

You can also use the specific number for any additional versions you've installed:

```sh
nvm use v8.2.1.
```

To list all of the versions of Node.js available, use the command: `nvm ls-remote`.

&nbsp;

---

## 💻 Visual Studio Code

There are many amazing code editors available for free, but Visual Studio Code has become the defacto standard and my personal favorite.

### Installing VS Code

VS Code is available on Windows, macOS, and Linux. You can download the latest Windows installer [here](https://code.visualstudio.com/). I recommend using the stable build.

### Changing the Default Shell

The WSL2 shell can be chosen as the default VS Code terminal by pressing `Ctrl` + `Shift` + `P` and typing/choosing Terminal: Select Default Profile, then selecting zsh:

![VSCode default shell](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/noat8j10zq7vhswyli5g.jpeg)

### Remote Extension

Install the [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) extension on VS Code.

> This allows you to use WSL as your integrated development environment and will handle compatibility and pathing for you. [Learn more](https://code.visualstudio.com/docs/remote/remote-overview).

This extension will also allow you to launch VS Code right from your WSL terminal by using the `code` command.

If I was inside the root directory of my repository, I would use `code .` to launch the entire directory inside VS Code.

```sh
cd my-project
code .
```

### More Extensions

The number of extensions available for VS Code can be overwhelming, here are some of the ones I use the most.

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - Launch a local development server with live reload feature for static & dynamic pages.
- [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) - Includes everything you need to start collaboratively editing and debugging in real-time.
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Quickly glimpse into whom, why, and when a line or code block was changed.
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) - View git log, file history, compare branches or commits
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - Prettier is an opinionated code formatter.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - Find and fix problems in your JavaScript code
- [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight) - This extension styles CSS/web colors found in your document.
- [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) - Markdown keyboard shortcuts, table of contents, auto preview, and more
- [markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) - Markdown linting and style checking for Visual Studio Code
- [GitHub Markdown Preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview) - Adds styling, markdown checkboxes, footnotes, emoji, and YAML preamble.
- [Wakatime](https://marketplace.visualstudio.com/items?itemName=WakaTime.vscode-wakatime) - Metrics, insights, and time tracking automatically generated from your programming activity.
- [Dash](https://marketplace.visualstudio.com/items?itemName=deerawan.vscode-dash) - Dash, Zeal, and Velocity integration in Visual Studio Code
- [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) - This unofficial extension integrates Draw.io (also known as diagrams.net) into VS Code.
- [Docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker) - Makes it easy to create, manage, and debug containerized applications.
- [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - IntelliSense, Linting, Debugging, Jupyter Notebooks, refactoring, unit tests, and more.

Note:

> You will need to install any VS Code extensions for your Remote - WSL. Extensions already installed locally on VS Code will not automatically be available. [Learn more](https://code.visualstudio.com/docs/remote/wsl#_managing-extensions).

&nbsp;

---

## 🍫 Chocolatey

Chocolatey is a package manager like [homebrew](https://brew.sh/), but for Windows.

### Admin Shell

Before we start the installation process, I want to cover launching an administrative shell from windows. There are a few ways to do this:

#### Option 1

Right-click on the Windows start menu and select Windows Terminal (Admin):

![Right clicked Windows start menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mqzguucwp7aajeotgb92.png)

Once your terminal loads, click the `˅` icon and open a new PowerShell tab. It should say `Administrator: Windows PowerShell` in the new tab:

![Admin PowerShell](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7yjofkr8p4pnwfci6mha.png)

#### Option 2

If you have Windows Terminal on your taskbar, `Shift` + `Right-Click` on the icon and select run as administrator, and then open a new PowerShell tab:

![Right click windows terminal icon](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m32t1yumbza4qx767k80.png)

#### Option 3

Use the search bar from the Start menu and type in `powershell`. A link to Run as Administrator will display:

![Search PowerShell from the start menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ipt85goj4dnalcxajm8.png)

#### Option 4

Windows Terminal added a new feature where you can launch a PowerShell/Command Prompt profile in an Admin terminal automatically. In the Windows Terminal settings, scroll down to your desired profile and then toggle the `Run this profile as Administrator` switch. Now you can skip all the steps above, and the terminal will always launch as admin.

![Admin Tab in Windows Terminal](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n7df9uir316zfm5am5zd.jpg)

### Installing Chocolatey

1. Open an administrative PowerShell terminal

2. Run the following command:

```ps
Get-ExecutionPolicy
```

3. If it returns `Restricted`, then run one of the following commands:

```ps
Set-ExecutionPolicy AllSigned
```

or

```ps
Set-ExecutionPolicy Bypass -Scope Process
```

> With PowerShell, you must ensure Get-ExecutionPolicy is not Restricted. We suggest using Bypass to bypass the policy to get things installed or AllSigned for quite a bit more security.

4. Finally, run the following command:

```ps
 Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

If you don't see any errors, you are ready to use Chocolatey! Type `choco` or `choco -?` now, or see [Getting Started](https://docs.chocolatey.org/en-us/getting-started) for usage instructions.

### Basic Chocolatey Commands

We use the `choco` command to run chocolatey. (_Remember, you must use an administrative shell for it to work._)

Install a new package:

```ps
choco install filename
```

Remove a package:

```ps
choco uninstall filename
```

List all of the installed packages:

```ps
choco list
```

Update:

```ps
choco upgrade filename
```

or to update everything at once:

```ps
choco upgrade all
```

### Windows Apps

Search for available apps on the [Community Package Repository](https://community.chocolatey.org/packages).

Here are a few of my favorite (free) apps for productivity and development on Windows:

- [Wox](http://www.wox.one/) - A full-featured launcher
- [RunJs](https://runjs.app/) - JavaScript and TypeScript playground
- [Responsively](https://responsively.app) - A modified web browser that helps in responsive web development.
- [Zeal](https://zealdocs.org/) - the Windows version of Dash
- [Figma](https://www.figma.com) - A collaborative UI design tool
- [draw.io](https://app.diagrams.net) - Flowchart maker and diagram software
- [GitHub Desktop](https://desktop.github.com/) - A GUI for Git
- [Postman](https://www.postman.com/) - API tools
- [Notion](https://www.notion.so/) - Project management and note-taking software
- [Microsoft PowerToys](https://docs.microsoft.com/en-us/windows/powertoys/?WT.mc_id=twitter-0000-docsmsft) - A set of utilities for power users

You can download all these at once with the following command using chocolatey in an admin shell:

```sh
choco install wox runjs responsively zeal figma drawio github-desktop postman notion powertoys -y
```

&nbsp;

---

## 🪜 Chrome Extensions

These are all available as [Firefox extensions](https://addons.mozilla.org/en-US/firefox/extensions/) as well.

- [React Dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi) - Adds React debugging tools to the Chrome Developer Tools.
- [ColorZilla](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp) - Advanced Eyedropper, Color Picker, Gradient Generator, and other colorful goodies
- [Axe Accessibility](https://chrome.google.com/webstore/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) - Accessibility Checker for Developers, Testers, and Designers in Chrome
- [daily.dev](https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied) - Get a feed of the hottest developer news personalized to you.
- [Nimbus Capture](https://chrome.google.com/webstore/detail/nimbus-screenshot-screen/bpconcjcammlapcogcnnelfmaeghhagj) - Screen Capture full Web page or any part.
- [WhatFont](https://chrome.google.com/webstore/detail/whatfont/jabopobgcpjmedljpbcaablpmlmfcogm) - With this extension, you could inspect web fonts by just hovering on them.
- [JSON Formatter](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en) - Makes JSON easy to read.

&nbsp;

---

## 📚 References

- [WSL2 Install Guide](https://www.sitepoint.com/wsl2/)
- [Install and get started setting up Windows Terminal](https://docs.microsoft.com/en-us/windows/terminal/install)
- [Git a Grip](https://dev.to/stephanlamoureux/series/11364)
- [Git Credential Manager](https://github.com/GitCredentialManager/git-credential-manager)
- [Using Zsh in WSL](http://kevinprogramming.com/using-zsh-in-windows-terminal/)
- [Installing Node on WSL](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)
- [Chocolatey Install Docs](https://chocolatey.org/install)
