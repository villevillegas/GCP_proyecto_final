gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/sell-registration-service
gcloud run deploy sell-registration-service
gcloud run deploy web-app-recharge-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/web-app-recharge-service \
  --platform managed \
  --region "us-central1" \
  --allow-unauthenticated \
  --max-instances=1