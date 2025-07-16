gcloud builds submit \
  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/web-app-recharge-service
gcloud run deploy web-app-recharge-service \
  --image gcr.io/$GOOGLE_CLOUD_PROJECT/web-app-recharge-service \
  --platform managed \
  --region "REGION" \
  --allow-unauthenticated \
  --max-instances=1