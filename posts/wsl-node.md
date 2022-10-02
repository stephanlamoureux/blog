---
title: 'Node.js for WSL'
date: '2022-09-24'
---

Node.js is a JavaScript runtime environment that executes JavaScript code outside a web browser. It allows us to install packages, run local web servers, create APIs, and more.

## ✅ Prerequisites

- Windows 10 or 11
- WSL or WSL2
- cURL

&nbsp;

---

## 🎛 NVM

You will likely need to switch between multiple versions of Node.js based on the needs of different projects you're working on. Node Version Manager allows you to quickly install and use different versions of node via the command line.

### Installing NVM

1. Open your WSL terminal and Install nvm with:

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

To verify installation, enter: `command -v nvm`. This should return 'nvm', if you receive 'command not found' or no response at all, close your current terminal, reopen it, and try again.

2. List which versions of Node are currently installed (should be none at this point):

```sh
nvm ls
```

![Ubuntu terminal displaying node not installed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mqmjllptjplmqmh0t4pa.png)

3. Install both the current and stable LTS versions of Node.js.

Install the current stable LTS release of Node.js (recommended for production applications:

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

### Changing Node Versions

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
nvm use v8.2.1
```

To list all of the versions of Node.js available, use the command: `nvm ls-remote`.

&nbsp;

---

## 📦 NPM

Node Package Manager is the default package manager for Node.js. It is a command line tool used to download or publish packages and manage the dependencies of a project. There is a searchable repository of all available NPM packages at [https://www.npmjs.com/](https://www.npmjs.com/).

### Initializing

When creating a new project that will utilize NPM, the first step is to initialize it. Make sure you are in the root directory of your project, and then use the following command:

```sh
npm init
```

### Installing Packages/Modules

&nbsp;

---

## 🔚 Conclusion

### References
