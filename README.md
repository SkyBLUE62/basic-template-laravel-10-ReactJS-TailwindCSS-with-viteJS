# Config Laravel 10, ReactJS, TailwindCSS with ViteJS
<a href="https://github.com/SkyBLUE62" style="text-decoration: none; color: white; ">Created by Thomas A</a>

## Table of Contents
1. [Template Installation](#template-installation)
2. [Dependency Installation](#dependency-installation)
3. [Template Configuration](#template-configuration)
4. [Running the Template](#running-the-template)

## Template Installation
Start by cloning the template on your PC.
```bash
git clone https://github.com/SkyBLUE62/basic-template-laravel-10-ReactJS-TailwindCSS-with-viteJS.git
```
## Dependency Installation
### Vendor folder
First, install the dependencies in the ```composer.json``` file.
```bash
composer install
```
If you want to update the dependencies in the ```composer.json``` file, use update instead.
```bash
composer update
```
### Node modules
Secondly, install the node packages 
```bash
npm install
```
If you want to update the packages use update
```bash
npm update
```
⚠️ **Warning**
```npm update``` will not upgrade your version, but will install the most recent version of the package.

For example, if you are using react 17, ```npm update``` will not update you to react 18, so you will have to update the packages manually.

## Template Configuration
### Copy the .env.example file
You need to copy the ```.env.example``` file to ```.env``` and modify it if necessary.
```bash
copy .env.example .env
```
### Generate a key app
Your Laravel application needs an ```APP_KEY``` variable in your ```.env file```.
```bash
php artisan key:generate
```
Once this comment has been executed, an ```APP_KEY``` will be added directly to your ```.env``` file.

## Running the Template
### Launch of the laravel server
```bash
php artisan serve
```
### Launch the server node 
```bash
npm run dev
```
### Project visualisation 

If you have not modified your Laravel configuration, you need to go to ```128.0.0.1:8000``` to see the web page




