#!/bin/bash

# Check if the correct number of arguments are provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <input_file> <output_file>"
    exit 1
fi

# Convert the file from Shift_JIS to UTF-8
iconv -f SHIFT_JIS -t UTF-8 "$1" > "$2"