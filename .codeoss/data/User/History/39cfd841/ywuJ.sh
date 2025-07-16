gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/subscriber-service

ls
 subscriber-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/subscriber-service \
  --platform managed \
  --region "us-central1" \
  --no-allow-unauthenticated \
  --max-instances=1