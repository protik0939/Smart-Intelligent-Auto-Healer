#!/bin/bash
echo "🛠 Running Auto-Heal..."

# Kill high CPU usage processes
CPU_THRESHOLD=90
HIGH_CPU_PROC=$(ps -eo pid,pcpu --sort=-pcpu | awk -v threshold="$CPU_THRESHOLD" '$2 > threshold {print $1}')
if [ ! -z "$HIGH_CPU_PROC" ]; then
    echo "Killing high CPU processes..."
    kill -9 $HIGH_CPU_PROC
fi

# Free RAM cache
sync; 
echo "$PASSWORD" | sudo -S sh -c 'echo 3 > /proc/sys/vm/drop_caches'

# Clean Disk
sudo rm -rf /tmp/*
sudo journalctl --vacuum-time=1d

echo "✅ Auto-Healing Completed."
