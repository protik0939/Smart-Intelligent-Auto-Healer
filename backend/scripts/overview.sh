#!/bin/bash

echo "📊 System Overview"
echo "==============================="

# CPU Usage
echo "🔍 CPU Usage:"
mpstat -P ALL 1 1 | grep -E "all|Average" | awk '{print "Core " NR-2 ": " $3 "%"}'
echo "-------------------------------"

# Memory Usage
echo "🧠 Memory Usage:"
free -h | awk 'NR==2{printf "Total: %s | Used: %s | Free: %s\n", $2, $3, $4}'
echo "-------------------------------"

# Storage Details
echo "💾 Storage Usage:"
df -h --total | grep 'total' | awk '{print "Total: " $2 " | Used: " $3 " | Free: " $4}'
echo "-------------------------------"

# Network Usage
echo "🌐 Network Usage:"
ifstat -t 1 1 | tail -n 1 | awk '{print "Download: " $1 " KB/s | Upload: " $2 " KB/s"}'
echo "==============================="
