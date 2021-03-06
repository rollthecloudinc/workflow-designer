# Demos

## Components

Pulls in workflow designer micro front-ends into druid shell.

https://ng-druid.github.io/workflow-designer-v2

Provides editor to easily orchestrate micro front-ends.

https://ng-druid.github.io/workflow-designer-v2/manage

## Modules

Pulls in modules (extenions) that provide new plugin.

https://ng-druid.github.io/tractorbeam-test-v3

Manage page. Click (x) in upper left corner to reveal context menu where new extensions can be added at runtime as contexts.

https://ng-druid.github.io/tractorbeam-test-v3

# Summary

This work flow designer will be fully recreated as a druid demo. Druid will replace the app shell in this repo. This will be the first fully functional druid demo using module federation.

All druid modules will be shared with micro applications. This provides some very powerful benefits.

## Auth

The shell owns authentication. The auth info can easily be accessed by any app using NgRx.

## Context

All druid contexts can be accessed by micro applications using the context plugin manager. For example, when a panel page hosting micro front-ends has a ad id as a path input which sets up a context to an ad. That context can be accessed through the context plugin manager and a micro application can respond to changes in the context like when the ad changes.

State can both be shared through NgRx or at a higher level with the context plugin manager which turns state info into domain specific contextual info glabally available throughout the shell and all children hosted within it.

## Extensibility

All child applications have access to ALL plugin manager and the plugin manager lib itself. Therefore, child applications can define not only ne plugins but new plugin definitions with their own dedicated manager hosted outside the shell application. This makes for ultimate flexibility. External apps are not limited to ones with visually displays but can also just be modules that add new plugins or define new plugin managers. For example, an outside app/module in the future can be loaded into the druid editor and any content types it adds will be available immedaitely for editors to use.

# Druid Architecture

## Alien Alias

The alien alias module provides a way to map a route to an external app without using panel pages. There will also be a demo showing this.

## Ousider

The outsider module exposes a content type that can be used to include outside applications within a panel page editor. This how the prototype shown below will be built. Druid will the shell and each separate micro app will be pulled in by using the "Outside App" content type in the editor.

## Tractor Beam

Modules can be pulled in immediately on the editor. When an app / module is pulled in all the plugins which that module provides become immediately available to use within the editor. This makes it possible to create a separate charts repo / app which extends druid editor with charts. Features can be  dynamically added at a click of a few buttons from completely separate repos.

# FederationDemo

Demonstrates webpack 5 Module Federation with Angular and the Angular Router.

![Workflow Designer](./result.png)

## Start

- ``npm run build``
- ``npm run serve:dist``
- Navigate to shell at http://localhost:5000
- Navigate to standalone microfrontend at http://localhost:3000

## Disclaimer

Module Federation is a brand-new technology that will come with webpack 5. As webpack 5 is currently in beta, it's not intended for production yet. Also, to make it work with Angular already today, my examples use a patched version of the Angular CLI and a custom webpack configuration. Once webpack 5 is final and the Angular CLI supports it, we won't need these workarounds anymore but have a more streamlined way for all of this. Nevertheless, investigating this technology already today gives us a sound idea of what's possible shortly.

For the same reason, this example does not support debug mode. Just build and serve it as mentioned above.
