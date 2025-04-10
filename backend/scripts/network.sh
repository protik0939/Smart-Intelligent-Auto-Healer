# echo "🔍 Network Usage:"
# ifstat 1 1 | awk 'NR==3 {print "Download: " $1 " KB/s | Upload: " $2 " KB/s"}'
#!/bin/bash

# Detect default network interface (excluding loopback)
NET_IFACE=$(ip route get 8.8.8.8 2>/dev/null | awk '{print $5; exit}')

if [ -z "$NET_IFACE" ]; then
    echo "❌ Could not detect network interface."
    exit 1
fi

echo "🌐 Monitoring Network Interface: $NET_IFACE"
echo "Press Ctrl+C to stop."

    RX1=$(cat /sys/class/net/$NET_IFACE/statistics/rx_bytes)
    TX1=$(cat /sys/class/net/$NET_IFACE/statistics/tx_bytes)
    sleep 1
    RX2=$(cat /sys/class/net/$NET_IFACE/statistics/rx_bytes)
    TX2=$(cat /sys/class/net/$NET_IFACE/statistics/tx_bytes)

    RX_RATE=$(( (RX2 - RX1) / 1024 ))
    TX_RATE=$(( (TX2 - TX1) / 1024 ))

    clear
    echo "🌐 Network Usage on $NET_IFACE"
    echo "=============================="
    echo "📥 Download: ${RX_RATE} KB/s"
    echo "📤 Upload  : ${TX_RATE} KB/s"
    echo "=============================="