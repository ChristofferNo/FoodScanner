# FoodScanner
This creation belongs to Malte and Christoffer.

In here is where we will and general info and guidelines about the Project.

As of now we have no license selected meaning that the following rules apply:
"without a license, the default copyright laws apply, meaning that you retain all rights to your source code and no one may reproduce, distribute, or create derivative works from your work. "
Source: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository

===================================
Naming conventions
===================================
The following link provides a good summary => https://www.linkedin.com/pulse/react-js-naming-convention-kristiyan-velkov/

===================================
Project Folder Structure Explanation
===================================

1. assets
    - This folder contains static assets such as images and fonts.

    |-- images
    |   - Store static image files used in the application.
    |
    |-- fonts
        - Place custom font files here.

2. src
    - The main source code directory.

    |-- components
    |   - Reusable components used across the application.

        |-- common
        |   - Components that are commonly used throughout the app.
        |
        |-- screens
        |   - Components specific to individual screens.
        |
        |-- navigation
        |   - Navigation-related components, such as navigators and navigation helpers.
        |
        `-- utils
            - Utility functions that don't fit into the services folder.

    |-- screens
    |   - Each screen in the app has its own folder.

        |-- Screen1
        |   - Components and files related to the Screen1 screen.

            |-- components
            |   - Components specific to Screen1.
            |
            |-- Screen1.js
            |   - The main file for Screen1, where you define the screen's structure and behavior.
            |
            `-- index.js
                - An entry point for Screen1, facilitating easier imports.

        |-- Screen2
        |   - Components and files related to the Screen2 screen.

            |-- components
            |   - Components specific to Screen2.
            |
            |-- Screen2.js
            |   - The main file for Screen2, where you define the screen's structure and behavior.
            |
            `-- index.js
                - An entry point for Screen2, facilitating easier imports.

        `-- index.js
            - A centralized entry point for all screens, simplifying imports.

    |-- services
    |   - Utility functions, API calls, or authentication services.

        |-- api.js
        |   - Functions for handling API calls and interacting with the backend.
        |
        `-- authService.js
            - Authentication-related services.

    |-- redux
    |   - Redux-related files.

        |-- actions
        |   - Action creators for Redux.
        |
        |-- reducers
        |   - Redux reducers.
        |
        |-- store.js
        |   - Redux store configuration.
        |
        `-- index.js
            - Centralized export file for easier imports.

    |-- themes
    |   - Styles, colors, and fonts used across the app.

        |-- colors.js
        |   - Define color constants.
        |
        |-- fonts.js
        |   - Define font styles.
        |
        `-- index.js
            - Centralized export file for theme-related configurations.

    `-- App.js
        - The entry point of the application.

3. index.js
    - The entry point for the React Native app, where you register the root component.

4. package.json
    - Dependency and script configuration file.

5. babel.config.js
    - Babel configuration for the project.

6. metro.config.js
    - Metro configuration for bundling and transpiling.

7. .gitignore
    - List of files and directories to be ignored by version control.

8. README.md
    - Project documentation.

===================================
