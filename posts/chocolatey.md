---
title: 'Getting Started With Chocolatey'
date: '2022-10-01'
---

Chocolatey is a package manager like [homebrew](https://brew.sh/), but for Windows.

## 🧑‍💻 Admin Shell

Before we start the installation process, I want to cover launching an administrative shell from windows. There are a few ways to do this:

- Option 1

Right-click on the Windows start menu and select Windows Terminal (Admin):

![Right clicked Windows start menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/mqzguucwp7aajeotgb92.png)
Once your terminal loads, click the `˅` icon and open a new PowerShell tab. It should say `Administrator: Windows PowerShell` in the new tab:

![Admin PowerShell](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7yjofkr8p4pnwfci6mha.png)

- Option 2

If you have Windows Terminal on your taskbar, `Shift` + `Right-Click` on the icon and select run as administrator, and then open a new PowerShell tab:

![Right click windows terminal icon](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/m32t1yumbza4qx767k80.png)

- Option 3

Use the search bar from the Start menu and type in `powershell`. A link to Run as Administrator will display:

![Search PowerShell from the start menu](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/8ipt85goj4dnalcxajm8.png)

- Option 4

Windows Terminal added a new feature where you can launch a PowerShell/Command Prompt profile in an Admin terminal automatically. In the Windows Terminal settings, scroll down to your desired profile and then toggle the `Run this profile as Administrator` switch. Now you can skip all the steps above, and the terminal will always launch as admin.

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/n7df9uir316zfm5am5zd.jpg)

&nbsp;

---

## 🍫 Installing Chocolatey

1. Open an administrative PowerShell terminal.

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

> With PowerShell, you must ensure `Get-ExecutionPolicy` is not Restricted. We suggest using `Bypass` to bypass the policy to get things installed or `AllSigned` for quite a bit more security.

4. Finally, run the following command:

```ps
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

If you don't see any errors, you are ready to use Chocolatey! Type `choco` or `choco -?` now, or see [Getting Started](https://docs.chocolatey.org/en-us/getting-started) for usage instructions.

&nbsp;

---

## ⌨️ Basic Commands

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

&nbsp;

---

## 📱 App Recommendations

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

## 🔚 Conclusion

### References

- [Chocolatey Docs](https://docs.chocolatey.org/en-us/)
