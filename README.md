# JupyterLab Atom One Dark Theme [![Build Status](https://www.travis-ci.org/DavidZhang73/jupyterlab-atom-one-dark-theme.svg?branch=master)](https://www.travis-ci.org/DavidZhang73/jupyterlab-atom-one-dark-theme)

A JupyterLab theme extension based on atom one dark.

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

TODO

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
