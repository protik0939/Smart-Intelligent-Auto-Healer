#!/bin/bash
echo "🔍 Network Usage:"
ifstat 1 1 | awk 'NR==3 {print "Download: " $1 " KB/s | Upload: " $2 " KB/s"}'
