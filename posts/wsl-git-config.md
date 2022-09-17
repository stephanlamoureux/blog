---
title: 'Configuring Git in WSL'
date: '2022-09-17'
---

This guide walks you through the initial Git config and setting up your Personal Access Token in a Windows dev environment.

## Prerequisites

My two assumptions for this are that you have Windows 10/11 and WSL already installed.

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

## Conclusion

That wraps up the basics for a Git config on Windows! If you are interested in learning more, check out my [Git a Grip series](https://dev.to/stephanlamoureux/series/11364).
