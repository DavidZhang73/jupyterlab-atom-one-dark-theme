<div align="center">

# JupyterLab Atom One Dark Theme

![Test](https://github.com/DavidZhang73/jupyterlab-atom-one-dark-theme/workflows/Test/badge.svg?branch=master)
![Publish to NPM](https://github.com/DavidZhang73/jupyterlab-atom-one-dark-theme/workflows/Publish%20to%20NPM/badge.svg)
[![NPM Version](https://badgen.net/npm/v/jupyterlab-atom-one-dark-theme)](https://www.npmjs.com/package/jupyterlab-atom-one-dark-theme)

_A JupyterLab theme extension based on atom one dark._

</div>

## Screenshot

![Screenshot](https://github.com/DavidZhang73/jupyterlab-atom-one-dark-theme/raw/master/screenshot/screenshot.png)

## Features

- Atom One Dark theme, based on [theme-atom-dark](https://github.com/burglarbenson/theme-atom-dark).
- Third-party extensions adaptation
    - [jupyterlab-execute-time](https://github.com/deshaw/jupyterlab-execute-time)
    - [jupyterlab_variableinspector](https://github.com/lckr/jupyterlab-variableInspector)
    - Welcome for PRs and issues.

## Usage

### Prerequisites

- JupyterLab (Tested on 2.1.5 only)

### Installation

1. Manually

```bash
jupyter labextension install DavidZhang73/jupyterlab-atom-one-dark-theme
```

2. Extension Manager

Extension Manager -> SEARCH `atom` -> `SEARCH RESULTS` -> install `jupyterlab-atom-one-dark-theme`

![Extension Manager](https://github.com/DavidZhang73/jupyterlab-atom-one-dark-theme/raw/master/screenshot/extension-manager.png)

### Enable Theme

Settings -> JupyterLab Themes -> select `Atom One Dark`

![Select](https://github.com/DavidZhang73/jupyterlab-atom-one-dark-theme/raw/master/screenshot/selection.png)

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```
