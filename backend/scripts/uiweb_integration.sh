#!/bin/bash

# Define the Telegram bot data
TOKEN="7838286745:AAGaGCM4r7DJe7G59quYrd-dZqvofqHhkos"
CHAT_ID="6217509464"
MESSAGE="This Project is made by Jubair Amin Siyum, Ishmak Rahat Rafi, Md. Hasan Jarif, Shakib, Md. Sadat Alam Protik"

# Extract team members into an array
TEAM_MEMBERS=("Jubair Amin Siyum" "Ishmak Rahat Rafi" "Md. Hasan Jarif" "Shakib" "Md. Sadat Alam Protik")
# Construct the JSON
echo "{"
echo "  \"message\": \"$MESSAGE\","
echo "  \"teamMembers\": ["

# Loop through team members to add them to JSON
for i in "${!TEAM_MEMBERS[@]}"; do
  member="${TEAM_MEMBERS[$i]}"
  if [ "$i" -lt $((${#TEAM_MEMBERS[@]} - 1)) ]; then
    echo "    \"$member\","
  else
    echo "    \"$member\""
  fi
done

echo "  ]"
echo "}"
