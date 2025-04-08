#!/bin/bash
echo "🔍 CPU Usage:"
mpstat -P ALL 1 1 | grep -E "all|Average" | awk '{print "Core " NR-2 ": " $3 "%"}'
