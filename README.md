<h1 align="center">
yori-vue
</h1>

<p align="center">
A static blog generator, based on Vue, inherits from Yori.
</p>

<p align="center">
  <a href="https://github.com/insorker/yori-vue">
    <img src="https://img.shields.io/badge/version-0.2.0-blue.svg" />
  </a>
</p>

<p align="center">
  <a src="https://insorker.github.io/">Demo</a> | <a src="https://github.com/insorker/yori-vue#Install">Install</a> | <a src="https://github.com/insorker/yori-vue#Usage">Usage</a>
</p>

## Install

Git clone this repository and run `npm install`.

> There is no guarantee that the latest version is the final version, but it may be the stable version.

## Usage

Rename the folder 'demo-docs' to 'docs' and perform all configurations here.

### home

### note

Put markdown files in the directory 'note/'.

Markdown files need to have a YAML front matter. The front matter should follow the following configuration:

```
title: Your Title Here
date: YYYY-MM-DD
brief: Your Brief Here
```

Replace 'YYYY-MM-DD' with the date you created or last modified the file.

### project

Write repositories' infomation in the file 'project/repo.txt'.

The format is as follows: username/repository name. And separate each entry by a new line.

## License

MIT