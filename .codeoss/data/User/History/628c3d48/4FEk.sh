curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"phone\": 66332211,\"amount\": 100 }" \
  $WEB_APP_RECHARGE_SERVICE_URL &
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"phone\": 22646768}" \
  $WEB_APP_RECHARGE_SERVICE_URL &
curl -X POST \
  -H "Content-Type: application/json" \
  -d "{\"phone\": 22556688}" \
  $WEB_APP_RECHARGE_SERVICE_URL &