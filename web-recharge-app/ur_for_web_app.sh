RECHARGE_SERVICE_URL=$(gcloud run services describe web-app-recharge-service \
    --region us-central1 \
    --format 'value(status.url)')

echo "Your Recharge Service URL is: $RECHARGE_SERVICE_URL"
