#!/bin/bash

# Detect active network interface
NET_IFACE=$(ip route get 1 | awk '{print $5; exit}')
SSID=$(iwgetid -r)

echo "📊 System Overview"
echo "==============================="

# CPU Overview
echo "🔍 CPU Overview:"
CPU_IDLE=$(top -bn1 | grep "Cpu(s)" | awk '{print $8}')
CPU_USAGE=$(echo "100 - $CPU_IDLE" | bc)
echo "CPU Usage: $CPU_USAGE% | Idle: $CPU_IDLE%"
echo "-------------------------------"

# Memory Overview
echo "🧠 Memory Overview:"
free -h | awk '/Mem:/ {printf "Total: %s | Used: %s | Free: %s\n", $2, $3, $4}'
echo "-------------------------------"

# Disk Overview
echo "💾 Disk Overview:"
TOTAL_DISK=$(df -h --total | grep total | awk '{print $2}')
FREE_DISK=$(df -h --total | grep total | awk '{print $4}')
SWAP_USED=$(free -h | awk '/Swap:/ {print $3}')
BIN_SIZE=$(du -sh /bin 2>/dev/null | awk '{print $1}')
TMP_SIZE=$(du -sh /tmp 2>/dev/null | awk '{print $1}')

echo "Total Storage: $TOTAL_DISK | Free: $FREE_DISK"
echo "Swap Used: $SWAP_USED"
echo "/bin Size: $BIN_SIZE | /tmp Size: $TMP_SIZE"
echo "-------------------------------"

# Network Overview
echo "🌐 Network Overview:"
echo "SSID: ${SSID:-N/A}"
IP_ADDR=$(ip addr show $NET_IFACE | grep 'inet ' | awk '{print $2}' | cut -d/ -f1)
MAC_ADDR=$(cat /sys/class/net/$NET_IFACE/address)
GATEWAY=$(ip route | grep default | awk '{print $3}')
# DNS=$(systemd-resolve --status | grep 'DNS Servers' | head -n 1 | awk '{print $3}')

echo "IP Address: $IP_ADDR"
echo "MAC Address: $MAC_ADDR"
echo "Gateway: $GATEWAY"
# echo "DNS Server: $DNS"
echo "==============================="