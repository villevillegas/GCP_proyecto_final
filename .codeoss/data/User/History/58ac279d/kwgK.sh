gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/web-app
gcloud run deploy web-app \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/web-app \
  --platform managed \
  --region "us-central1" \
  --allow-unauthenticated \
  --max-instances=1