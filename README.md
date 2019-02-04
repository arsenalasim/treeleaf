# Treeleaf desktop app
# Steps of installation
    - Add electron globally to your macine using npm or yarn
        `yarn install -g electron`
    - agter that install all the dependencies in the application
        `yarn install`
    - After that you can run the application in development mode by running
        `yarn start`
    - After the development work is completed you bust build the html files using the `yarn build`.
    - After building the html files you must also integrate the built files to the electron app accordingly.
    - After integrating the built files you can build the electron app by using tools such as `electron builder`