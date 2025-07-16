gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/subscriber_service

gcloud run deploy subscriber_service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/subscriber_service \
  --platform managed \
  --region "REGION" \
  --no-allow-unauthenticated \
  --max-instances=1