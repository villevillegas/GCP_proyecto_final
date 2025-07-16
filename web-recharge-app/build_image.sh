# Build and tag the image
docker build -t us-central1-docker.pkg.dev/final-project-465717/my-react-app-repo/react-frontend:latest \
    --build-arg REACT_APP_RECHARGE_SERVICE_URL="$RECHARGE_SERVICE_URL" .

# Authenticate Docker to Artifact Registry
gcloud auth configure-docker us-central1-docker.pkg.dev

# Push the image to Artifact Registry
docker push us-central1-docker.pkg.dev/final-project-465717/my-react-app-repo/react-frontend:latest
