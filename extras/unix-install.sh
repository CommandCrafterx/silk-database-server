# !/bin/bash

# Function to check if npm is installed
check__installed() {
    if ! command -v npm &> /dev/null; then
        echo "Error: npm is not installed. Please install npm and try again."
        exit 1
    fi
}
