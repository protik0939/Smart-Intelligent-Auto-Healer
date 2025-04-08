#!/bin/bash
TOKEN="your_bot_token"
CHAT_ID="your_chat_id"
MESSAGE="🚀 Auto-Healer Alert: System optimization executed!"
curl -s -X POST "https://api.telegram.org/bot$TOKEN/sendMessage" -d "chat_id=$CHAT_ID&text=$MESSAGE"
echo "📨 Notification Sent!"
