#!/bin/bash

echo "["

mpstat -P ALL 1 1 | awk '
BEGIN { first = 1 }
/Average:/ {
    if ($2 == "all") {
        core = -1
        usage = 100 - $(NF)  # idle is the last field; usage = 100 - idle
    } else {
        core = $2
        usage = 100 - $(NF)
    }

    if (first == 0) {
        printf ",\n"
    }
    printf "  {\n    \"core\": %d,\n    \"status\": \"%.1f%%\"\n  }", core, usage
    first = 0
}
END {
    print "\n]"
}
'
