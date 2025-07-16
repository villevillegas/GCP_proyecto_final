gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/balance-update-service
gcloud run deploy balance-update-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/balance-update-service \
  --platform managed \
  --region "us-central1" \
  --allow-unauthenticated \
  --max-instances=1