#!/bin/bash

# Function to check if a command exists
check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo "Error: $1 is not installed. Please install it and try again."
        exit 1
    fi
}

# Check prerequisites
check_command node
check_command npm
check_command git

# Clear screen and print welcome message
clear
echo "Welcome to the Express SQLITE3 Template Installer."
echo "This script will install the Express SQLITE3 Template to your current directory."
echo "Ensure that you have npm, Node.js, and Git installed before running this script."
echo "Warning: This script will install Node.js modules!"
echo

# Confirm before proceeding
while true; do
    read -rp "Do you want to proceed with the installation? (y/n) " yn
    case "$yn" in
        [yY]) echo "Proceeding..."; break ;;
        [nN]) echo "Installation cancelled."; exit 0 ;;
        *) echo "Invalid input. Please enter 'y' or 'n'." ;;
    esac
done

# Cloning the repository
REPO_URL="https://github.com/FlipArtYT/express-sqlite3-template.git"
echo "Cloning the repository..."
git clone "$REPO_URL" || { echo "Error: Failed to clone repository."; exit 1; }

# Installing required Node.js modules
echo "Installing required Node.js modules..."
npm install || { echo "Error: npm installation failed."; exit 1; }

# End Message
echo "Installation complete! Navigate to '$INSTALL_DIR' and follow the instructions in the README.md file."
echo "Credits: FlipArtYT, CommandCrafterx"
echo "Thank you for using the installer!"
