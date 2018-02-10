# Binkevich jewellery

## Installation
1. $: `composer install`
    * Set only the database parameters, skip the others
2. $: `bin/console d:d:c && bin/console d:s:c && bin/console f:l -n`
    * This creates the database, populates it with test data

## Running frontend:
1. Make sure your backend is served as expected `php bin/console server:run`
2. Run `yarn run encore dev-server --hot` for development

## GIT Workflow
feature/<feature-name> for feature branches
bugfix/<feature-name> for feature branches
refactor/<feature-name> for feature branches

## Description

   #### Third party bundles used:
   * [`hautelook/alice-bundle`](https://github.com/hautelook/AliceBundle/tree/1.x) - for easy fixture generation from yaml files. Can be found under src/AppBundle/DataFixtures
   * [`friendsofsymfony/rest-bundle`](https://github.com/FriendsOfSymfony/FOSRestBundle) - bundle for API creation 
   * [`jms/serializer-bundle`](https://jmsyst.com/libs/serializer) - bundle used for serialization, here for API responses serialization.
   * [`nelmio/api-doc-bundle`](https://github.com/nelmio/NelmioApiDocBundle/tree/2.x) - bundle that simplyfies creation of API documentation. Examples can be found in src/ApiBundle/Controller/PostApiController.php in `ApiDoc` annotation.
   
   #### Useful aliases
    alias compi='composer install'
    alias compu='composer update'
    alias bc='php bin/console'
    alias cl='bc cache:clear'
    alias clall='cl -e prod && cl && cl -e test'
    alias fadb='bc d:d:d -e test --force && bc d:d:c -e test && bc d:s:c -e test && bc f:l -n -e test'
    alias fixtures='bc f:l -n'
    
   #### Links to check
   * [Apache configuration](http://symfony.com/doc/current/setup/web_server_configuration.html)
   * [Symfony permissions fix](https://symfony.com/doc/current/setup/file_permissions.html)
   * [Angular Git Commit Messages Guideline](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit) 