#gcloud builds submit \
#  --tag gcr.io/$GOOGLE_CLOUD_PROJECT/web-app
#gcloud run deploy web-app \
 # --image gcr.io/$GOOGLE_CLOUD_PROJECT/web-app \
 # --platform managed \
 # --region "us-central1" \
 # --allow-unauthenticated \
 # --max-instances=1

gcloud config set project $GOOGLE_CLOUD_PROJECT
gcloud artifacts repositories create my-react-app-repo \
    --repository-format=docker \
    --location=us-central1 \
    --description="Docker repository for React applications"

RECHARGE_SERVICE_URL=$(gcloud run services describe web-app-recharge-service \
    --region us-central1 \
    --format 'value(status.url)')

echo "Your Recharge Service URL is: $RECHARGE_SERVICE_URL"



# Build and tag the image
docker build -t us-central1-docker.pkg.dev/final-project-465717/my-react-app-repo/react-frontend:latest \
    --build-arg REACT_APP_RECHARGE_SERVICE_URL="$RECHARGE_SERVICE_URL" .

# Authenticate Docker to Artifact Registry
gcloud auth configure-docker us-central1-docker.pkg.dev

# Push the image to Artifact Registry
docker push us-central1-docker.pkg.dev/final-project-465717/my-react-app-repo/react-frontend:latest


gcloud run deploy react-frontend-app \
  --image us-central1-docker.pkg.dev/final-project-465717/my-react-app-repo/react-frontend:latest \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated \ # If you want your web app to be publicly accessible
  --port 80 \ # Nginx is listening on port 80 inside the container
  --memory 256Mi \ # Adjust memory as needed
  --cpu 1 \ # Adjust CPU as needed
  --max-instances 2 # Adjust max instances as needed
