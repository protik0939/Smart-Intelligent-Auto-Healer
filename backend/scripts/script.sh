#!/bin/bash

while true; do
    clear
    echo "========================================"
    echo "🛠 Intelligent System Auto-Healer"
    echo "========================================"
    echo "1. Overview"
    echo "2. CPU Usage"
    echo "3. RAM Usage"
    echo "4. Storage Details"
    echo "5. Network Usage"
    echo "6. Run Auto-Heal"
    echo "7. Web Integration (Telegram Notification)"
    echo "8. Run on Background"
    echo "9. Exit"
    echo "========================================"
    read -p "Select an option [1-9]: " choice

    case $choice in
	1) ./overview.sh ;;
        2) bash processor.sh ;;
        3) bash memory.sh ;;
        4) bash disks.sh ;;
	5) ./network.sh ;;
        6) sudo ./auto_heal.sh ;;
        7) bash web_integration.sh ;;
        8) nohup bash script.sh > /dev/null 2>&1 & echo "🚀 Running in Background..." ;;
        9) echo "Exiting..."; exit 0 ;;
        *) echo "❌ Invalid option, try again!" ;;
    esac

    read -p "Press Enter to continue..."
done
