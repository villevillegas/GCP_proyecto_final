gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/balance-update-service
gcloud run deploy web-app-recharge-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/web-app-recharge-service \
  --platform managed \
  --region "us-central1" \
  --allow-unauthenticated \
  --max-instances=1