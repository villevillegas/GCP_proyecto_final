gcloud run deploy react-frontend-app \
  --image us-central1-docker.pkg.dev/final-project-465717/my-react-app-repo/react-frontend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \
  --port 80 --max-instances=2 
# Adjust max instances as needed
 
  #gcloud run deploy web-app \
 # --image gcr.io/$GOOGLE_CLOUD_PROJECT/web-app \
 # --platform managed \
 # --region "us-central1" \
 # --allow-unauthenticated \
 # --max-instances=1