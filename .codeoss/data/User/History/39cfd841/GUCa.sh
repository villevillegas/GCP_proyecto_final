gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/subscriber-service

gcloud run deploy subscriber-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/subscriber-service \
  --platform managed \
  --region "REGION" \
  --no-allow-unauthenticated \
  --max-instances=1