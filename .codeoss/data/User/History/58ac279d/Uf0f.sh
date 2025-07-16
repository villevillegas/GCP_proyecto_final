gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/web-app
gcloud run deploy sell-registration-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/sell-registration-service \
  --platform managed \
  --region "us-central1" \
  --allow-unauthenticated \
  --max-instances=1