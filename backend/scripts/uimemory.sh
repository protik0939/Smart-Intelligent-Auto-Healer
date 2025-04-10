#!/bin/bash

# Get memory data
memory_data=$(free -h | grep Mem)

# Extract values from the memory data
total=$(echo $memory_data | awk '{print $2}')
used=$(echo $memory_data | awk '{print $3}')
free=$(echo $memory_data | awk '{print $4}')
shared=$(echo $memory_data | awk '{print $5}')
buff_cache=$(echo $memory_data | awk '{print $6}')
available=$(echo $memory_data | awk '{print $7}')

# Get swap data
swap_data=$(free -h | grep Swap)
swap_total=$(echo $swap_data | awk '{print $2}')
swap_used=$(echo $swap_data | awk '{print $3}')
swap_free=$(echo $swap_data | awk '{print $4}')

# Output as JSON
echo '{
  "memory": {
    "total": "'$total'",
    "used": "'$used'",
    "free": "'$free'",
    "shared": "'$shared'",
    "buff_cache": "'$buff_cache'",
    "available": "'$available'"
  },
  "swap": {
    "total": "'$swap_total'",
    "used": "'$swap_used'",
    "free": "'$swap_free'"
  }
}'
