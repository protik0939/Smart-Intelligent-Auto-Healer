#!/bin/bash

# Detect active network interface
NET_IFACE=$(ip route get 1 | awk '{print $5; exit}')
SSID=$(iwgetid -r)
IP_ADDR=$(ip addr show "$NET_IFACE" | grep 'inet ' | awk '{print $2}' | cut -d/ -f1)
MAC_ADDR=$(cat /sys/class/net/$NET_IFACE/address)
GATEWAY=$(ip route | grep default | awk '{print $3}')

# CPU
CPU_IDLE=$(top -bn1 | grep "Cpu(s)" | awk '{print $8}')
CPU_USAGE=$(echo "scale=1; 100 - $CPU_IDLE" | bc)

# Memory
MEM_TOTAL=$(free -h | awk '/Mem:/ {print $2}')
MEM_USED=$(free -h | awk '/Mem:/ {print $3}')
MEM_FREE=$(free -h | awk '/Mem:/ {print $4}')

# Disk
TOTAL_DISK=$(df -h --total | grep total | awk '{print $2}')
FREE_DISK=$(df -h --total | grep total | awk '{print $4}')
SWAP_USED=$(free -h | awk '/Swap:/ {print $3}')
BIN_SIZE=$(du -sh /bin 2>/dev/null | awk '{print $1}')
TMP_SIZE=$(du -sh /tmp 2>/dev/null | awk '{print $1}')

# Output as JSON
echo "{
  \"cpu\": {
    \"usage\": \"$CPU_USAGE\",
    \"idle\": \"$CPU_IDLE\"
  },
  \"memory\": {
    \"total\": \"$MEM_TOTAL\",
    \"used\": \"$MEM_USED\",
    \"free\": \"$MEM_FREE\"
  },
  \"disk\": {
    \"total\": \"$TOTAL_DISK\",
    \"free\": \"$FREE_DISK\",
    \"swap\": \"$SWAP_USED\",
    \"bin\": \"$BIN_SIZE\",
    \"tmp\": \"$TMP_SIZE\"
  },
  \"network\": {
    \"ssid\": \"${SSID:-N/A}\",
    \"ip\": \"$IP_ADDR\",
    \"mac\": \"$MAC_ADDR\",
    \"gateway\": \"$GATEWAY\"
  }
}"
