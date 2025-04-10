#!/bin/bash
TOKEN="7838286745:AAGaGCM4r7DJe7G59quYrd-dZqvofqHhkos"
CHAT_ID="6217509464"
MESSAGE="This Project is made by Jubair Amin Siyum, Ishmak Rahat Rafi, Md. Hasan Jarif, Shakib, Md. Sadat Alam Protik"
curl -s -X POST "https://api.telegram.org/bot$TOKEN/sendMessage" -d "chat_id=$CHAT_ID&text=$MESSAGE"
echo "📨 Notification Sent!" 