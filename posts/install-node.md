---
title: 'Node.js: Installation & Basics'
date: '2022-10-10'
---

Node.js is a JavaScript runtime environment that executes JavaScript code outside a web browser. It allows us to install packages, run local web servers, create APIs, and more.

- [🎛 NVM](#-nvm)
	- [Installing NVM](#installing-nvm)
	- [Changing Node Versions](#changing-node-versions)
- [📦 NPM](#-npm)
	- [New Projects](#new-projects)
	- [package.json](#packagejson)
	- [Installing Modules](#installing-modules)
	- [Dependencies](#dependencies)
	- [Developer Dependencies](#developer-dependencies)
	- [Batch Installing](#batch-installing)
	- [Uninstalling](#uninstalling)
	- [Versioning](#versioning)
	- [package-lock.json](#package-lockjson)
	- [Scripts](#scripts)
		- [References](#references)

### Requirements

- WSL/macOS/Linux
- cURL or Wget

&nbsp;

---

## 🎛 NVM

You will likely need to switch between multiple versions of Node.js based on the needs of different projects you're working on. Node Version Manager allows you to quickly install and use different versions of node via the command line.

### Installing NVM

1. Open your terminal and install NVM with `curl` or `wget`:

   ```sh
   url -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

   ```sh
   wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```

   To verify installation, enter: `command -v nvm`. This should return 'nvm', if you receive 'command not found' or no response at all, close your current terminal, reopen it, and try again.

2. List which versions of Node are currently installed (should be none at this point):

   ```sh
   nvm ls
   ```

   ![Ubuntu terminal displaying node not installed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/owxc2lt3v7bwxjiwkmb9.png)

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

   ![Ubuntu terminal displaying node installed](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/czjveonitj363d1cy9j5.jpg)

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

Node Package Manager is the default package manager for Node.js. It is a command-line tool used to download or publish packages and manage the dependencies of a project. There is a searchable repository of all available NPM packages at [https://www.npmjs.com/](https://www.npmjs.com/).

### New Projects

When creating a new project that will utilize NPM, it must be initialized with the `init` command. First, make sure you are in the root directory of your project, and then use the following command:

```sh
npm init
```

### package.json

`npm init` generates a `package.json` file and will prompt you for the metadata of your project. This includes things like the name, version, description, and license. You can think of it as the blueprint of your project as it will also contain the packages it depends on. The metadata can be changed at any time by editing the `package.json` file after the initialization.

If you would like to automatically populate the initialization with all the default values, you may add the `--yes` flag.

```sh
npm init --yes
```

### Installing Modules

Modules are installed via the `npm install` or `npm i` command.

```sh
npm install react
```

The above command will install the React module as a dependency in `package.json`.

We can also install NPM packages globally on our system. This is useful for utilities like command line interfaces.

[Yarn](https://yarnpkg.com/) is another widely used node package manager, if we wanted to use it on all our node projects we would need the `--global` or `-g` flag.

```sh
npm install --global yarn
```

### Dependencies

You can save a module as either a dependency or a developer dependency.

A dependency would be something that your project cannot function properly without.

The `--save` flag used to be needed to install modules as a dependency, but it is now done automatically with the `install` command.

```sh
npm install --save gray-matter
```

Is the same as:

```sh
npm install gray-matter
```

![VS Code example of the dependencies section of package.json](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/04lmld7kohw0a5xlq99r.jpg)

### Developer Dependencies

A developer dependency would be the modules used to build the project, not run it. This would include things like linters and testing tools.

Developer dependencies are added with the `--save-dev` or `-D` flag. This adds the module to the `devDependencies` section of `package.json`

```sh
npm install --save-dev husky
```

![VS Code example of the devDependencies section of package.json](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e34jyn0rcpcknb00nsu5.jpg)

### Batch Installing

Apart from installing a single module, you can install all modules that are listed as `dependencies` and `devDependencies`:

```sh
npm install
```

This will install all modules listed in the `package.json` of your current directory.

If we only wanted to install the dependencies needed to run our project, the `--production` flag is used:

```sh
npm install --production
```

the `--production` flag will only install the modules from the `dependencies` section of `package.json` and ignore the `devDependencies`. The perk of this is notably reducing the size of the `node_modules` folder.

### Uninstalling

Removing modules works in the same way as installing them. Flags will need to be used for any global or developer dependencies.

_Dependencies:_

```sh
npm uninstall react
```

_Developer Dependencies:_

```sh
npm uninstall --save-dev husky
```

_Global Installs:_

```sh
npm uninstall --global yarn
```

### Versioning

Package versions are identified with major, minor, and patch releases. `8.1.1` would be major version 8, minor version 1, and patch version 1.

You can specify an exact version number by using the `@` symbol.

```sh
npm install react@17.0.1
```

Two more symbols we can use are `^` and `~`.

`^` is the latest minor release.
For example, `npm install ^8.1.1` specification might install version `8.3.1` if that's the latest minor version.

`~` is the latest patch release.
In the same way as minor releases, `npm install ~8.1.1` could install version `8.1.6` if that's the latest patch version available.

When using the `npm install` or `npm i` command, the latest minor version will be used.

### package-lock.json

The exact package versions will be documented in a generated `package-lock.json` file.

The values found inside the `dependencies` and `devDependencies` objects of the `package.json` file include a range of acceptable versions of each package to install.

`package-lock.json` is generated by the `npm install` command and contains the _exact_ versions of the dependencies used.

### Scripts

`package.json` also contains a `scripts` property that can be defined to run command-line tools installed on the current project. This can include things like running tests, formatting your code, and launching a local server.

![VS Code example of the scripts section of package.json](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d23n93eo9edaazllm2tj.jpg)

NPM scripts are run by using the `run` command. With the above configuration, you would use the following command to have prettier format your code:

```sh
npm run format
```

The keys in the scripts object are the command names and the values are the actual commands.

&nbsp;

---

_Check out the official [NPM](https://docs.npmjs.com/), [NVM](https://github.com/nvm-sh/nvm), and [Node.js](https://nodejs.org/en/docs/) docs for more in-depth guides._

#### References

- [What is npm? A Node Package Manager Tutorial for Beginners](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)
- [An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
- [npm: How To Install A Specific Version of Node.js Package](https://www.mend.io/free-developer-tools/blog/npm-how-to-install-a-specific-version-of-node-js-package/)
