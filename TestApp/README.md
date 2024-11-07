# test-app

# SharePoint Framework Demo Application
This app fetches and displays SharePoint list items in a tabular format.

# Spfx environment setup

a. Download and install Node JS v18
b. On Powershell window, run below command:
    npm install gulp-cli yo @microsoft/generator-sharepoint --global


# Create webpart solution
Run below command to generate new solution and select webpart with React framework
yo @microsoft/sharepoint

# Steps to deploy 
gulp build --ship
gulp bundle --ship
gulp package-solution --ship

Upload the .sppkg file to SharePoint Admin center under Apps

Add the webpart on the site page

# external libraries used
@pnp/sp - libraries to connect sharepoint data
@mui - Material UI library for better user interface