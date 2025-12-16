#!/bin/bash
LAST_COMMIT=$(git log -1 --format="%cd" --date=short)
find ./_site -type f -name "*.html" -exec sed -i "s/LAST_UPDATED/$LAST_COMMIT/g" {} +   