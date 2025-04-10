#!/bin/bash

NET_IFACE=$(ip route get 8.8.8.8 2>/dev/null | awk '{print $5; exit}')

if [ -z "$NET_IFACE" ]; then
    echo "{\"error\": \"Could not detect network interface.\"}"
    exit 1
fi

RX1=$(cat /sys/class/net/$NET_IFACE/statistics/rx_bytes)
TX1=$(cat /sys/class/net/$NET_IFACE/statistics/tx_bytes)
sleep 1
RX2=$(cat /sys/class/net/$NET_IFACE/statistics/rx_bytes)
TX2=$(cat /sys/class/net/$NET_IFACE/statistics/tx_bytes)

RX_RATE=$(( (RX2 - RX1) / 1024 ))
TX_RATE=$(( (TX2 - TX1) / 1024 ))

echo "{
  \"interface\": \"$NET_IFACE\",
  \"download_kbps\": $RX_RATE,
  \"upload_kbps\": $TX_RATE
}"
