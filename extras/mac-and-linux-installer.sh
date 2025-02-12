#!/bin/bash

# Function to check if a command exists
check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo "Error: '$1' is not installed. Please install it and try again."
        exit 1
    fi
}

# Check prerequisites
check_command node
check_command npm
check_command git

# Clear screen and print welcome message
clear
echo "=========================================="
echo " Express SQLITE3 Template Installer"
echo "=========================================="
echo "This script will install the Express SQLITE3 Template in your current directory."
echo "Ensure that you have npm, Node.js, and Git installed before proceeding."
echo "Warning: This script will install Node.js modules!"
echo

# Confirm before proceeding
while true; do
    read -rp "Do you want to proceed with the installation? (y/n): " yn
    case "$yn" in
        [yY]) echo "Proceeding with installation..."; break ;;
        [nN]) echo "Installation cancelled."; exit 0 ;;
        *) echo "Invalid input. Please enter 'y' or 'n'." ;;
    esac
done

# Repository details
REPO_URL="https://github.com/FlipArtYT/express-sqlite3-template.git"
TARGET_DIR="express-sqlite3-template"

# Clone the repository
echo "Cloning the repository..."
if git clone "$REPO_URL" "$TARGET_DIR"; then
    echo "Repository successfully cloned."
else
    echo "Error: Failed to clone repository."
    exit 1
fi

# Navigate into the project directory
cd "$TARGET_DIR/contents" || { echo "Error: Failed to enter project directory."; exit 1; }

# Install required Node.js modules
echo "Installing required Node.js modules..."
if npm install express better-sqlite3; then
    echo "Dependencies installed successfully."
else
    echo "Error: npm installation failed."
    exit 1
fi

# End message
echo "=========================================="
echo "Installation complete!"
echo "Navigate to '$TARGET_DIR' and follow the instructions in README.md."
echo "Credits: FlipArtYT, CommandCrafterx"
echo "Thank you for using this installer!"
echo "=========================================="
