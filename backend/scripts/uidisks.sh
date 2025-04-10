#!/bin/bash
disk_info=$(df -h | grep '^/dev')
json_output="["

while IFS= read -r line; do
  device=$(echo $line | awk '{print $1}')
  size=$(echo $line | awk '{print $2}')
  used=$(echo $line | awk '{print $3}')
  available=$(echo $line | awk '{print $4}')
  usage=$(echo $line | awk '{print $5}')
  mount=$(echo $line | awk '{print $6}')
  
  json_output+="{\"device\":\"$device\", \"size\":\"$size\", \"used\":\"$used\", \"available\":\"$available\", \"usage\":\"$usage\", \"mount\":\"$mount\"},"
done <<< "$disk_info"

# Remove the last comma and close the JSON array
json_output="${json_output%,}]"

echo $json_output
