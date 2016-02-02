#!/bin/bash
cd $(dirname "$0")/..

files="$@"
if [[ $# -eq 0 ]]; then
  files=$(find app -name '*.prova.js' -print0 | xargs -0)
fi
./node_modules/.bin/prova ${files}
