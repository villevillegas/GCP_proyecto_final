gcloud pubsub topics create recharge-topic
gcloud functions deploy publishRecharge   --runtime nodejs20   --trigger-http   --allow-unauthenticated
ls
gcloud services enable cloudbuild.googleapis.com
gcloud config get-value project
ls
mkdir proyecto_final
cd proyecto_final/
mkdir web_app
mkdir message_sender
mkdir sell_registration_microservice
mkdir balance_update_service
dir
ls
code .
ls
node
ls
cd proyecto_final/
ls
cd web_app/
ls
cd ..
rm web_app/
ls
npx create-react-app web-recharge-app
cd web-recharge-app/
dir
npm start
ls
gcloud config set compute/zone "ZONE"
export ZONE=$(gcloud config get compute/zone)
gcloud config set compute/region "REGION"
export REGION=$(gcloud config get compute/region)
echo $REGION
echo REGION
gcloud config get compute/region
gcloud config set compute/zone "us-central1-a"
gcloud config get compute/zone
export ZONE=$(gcloud config get compute/zone)
echo ZONE
echo $ZONE
gcloud config get compute/region
gcloud config set compute/region us-central1
gcloud config get compute/region
export REGION=$(gcloud config get compute/region)
echo $REGION
echo $ZONE
gcloud pubsub topics create phone_refill_topic
gcloud services enable run.googleapis.com
echo $ZONE
clear
ls
cd proyecto_final/
l
ls
ls web-recharge-app/
ls
ls proyecto_final/
mkdir web-recharge-app-service
cd web-recharge-app-service/
npm init
ls
npm install express
npm install body-parser
npm install @google-cloud/pubsub
ls
chmod u+x deploy.sh
ls
.deploy.sh
./deploy.sh
export WEB_APP_RECHARGE_SERVICE_URL=$(gcloud run services describe web-app-recharge-service --platform managed --region "us-central1" --format="value(status.address.url)")
echo $WEB_APP_RECHARGE_SERVICE_URL
chmod u+x post-reports.sh
ls
chmod u+x post-recharges.sh
ls
./post-recharges.sh 
cd proyecto_final/
ls
cd web-recharge-app/
ls
ls
cd proyecto_final/
ls
cd web-recharge-app/
ls
cd web-recharge-app
ls
cd proyecto_final/
ls
cd web-recharge-app/
ls
cd proyecto_final/
cd web-recharge-app/
cd web-recharge-app-service/
ls
./deploy.sh 
gcloud config get-value project
gcloud config get project
export PROJECT_ID=$(gcloud config get-value project)
echo $PROJECT_ID
gcloud config set compute/region "us-central1"
gcloud auth login
gcloud config get project
gcloud config list project
ls
cd web-recharge-app-service/
ls
./deploy.sh 
gcloud config set account villevillegas2@gmail.com
./deploy.sh 
gcloud auth login
./deploy.sh 
ls
cd ..
ls
cd proyecto_final/
ls
cd topic_subscriber/
ls
npm init
npm install express
npm install body-parser
gcloud iam service-accounts create pubsub-cloud-run-invoker --display-name "PubSub Cloud Run Invoker"
ls
chmod u+x deploy.sh
ls
./deploy.sh
gcloud run services add-iam-policy-binding subscriber-service --member=serviceAccount:pubsub-cloud-run-invoker@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com --role=roles/run.invoker --region "us-central1" --platform managed
gcloud iam service-accounts create pubsub-cloud-run-invoker --display-name "PubSub Cloud Run Invoker"
gcloud run services add-iam-policy-binding subscriber-service --member=serviceAccount:pubsub-cloud-run-invoker@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com --role=roles/run.invoker --region "us-central1" --platform managed
PROJECT_NUMBER=$(gcloud projects list --filter="final" --format='value(PROJECT_NUMBER)')
echo $PROJECT_NUMBER
gcloud projects add-iam-policy-binding $GOOGLE_CLOUD_PROJECT --member=serviceAccount:service-$PROJECT_NUMBER@gcp-sa-pubsub.iam.gserviceaccount.com --role=roles/iam.serviceAccountTokenCreator
EMAIL_SERVICE_URL=$(gcloud run services describe subscriber-service --platform managed --region "us-central1" --format="value(status.address.url)")
SUBSCRIBER_SERVICE_URL=$(gcloud run services describe subscriber-service --platform managed --region "us-central1" --format="value(status.address.url)")
echo $SUBSCRIBER_SERVICE_URL
gcloud pubsub subscriptions create subscriber-service-sub --topic new-lab-report --push-endpoint=$SUBSCRIBER_SERVICE_URL --push-auth-service-account=pubsub-cloud-run-invoker@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com
gcloud pubsub subscriptions create subscriber-service-sub --topic phone_refill_topic --push-endpoint=$SUBSCRIBER_SERVICE_URL --push-auth-service-account=pubsub-cloud-run-invoker@$GOOGLE_CLOUD_PROJECT.iam.gserviceaccount.com
ls
cd proyecto_final/
ls
cd balance_update_service/
ls
npm init
cd ..
cd sell_registration_microservice/
npm init
ls
cd proyecto_final/
ls
cd sell_registration_microservice/
ls
dir
ls 
npm install --save @google-cloud/firestore
cd ..
cd balance_update_service/
npm install --save @google-cloud/firestore
ls
cd ..
ls
cd sell_registration_microservice/
ls
dir
echo $$GOOGLE_CLOUD_PROJECT
echo $GOOGLE_CLOUD_PROJECT
npm install firebase-admin
ls
chmod u+x deploy.sh
ls
./deploy
./deploy.sh
npm install express
npm install body-parser
cd proyecto_final/
ls
cd sell_registration_microservice/
ls
./deploy
./deploy.sh
./deploy.sh.
dir
chmod u+x deploy.sh
dir
ls
deploy.sh
./deploy.sh
cd ..
doir
dir
cd balance_update_service/
dir
chmod u+x deploy.sh
ls
npm install @google-cloud/firestore
ls
./deploy
./deploy.sh
kubectl get pods
cd ..
cd sell_registration_microservice/
ls
kubectl apply -f sell-registration-microservice.yaml
kubectl
kubectl get
kubectl get -h
kubectl get -A
kubectl set -h
gcloud container clusters get-credentials
gcloud container clusters get-credentials cluster-recargas --region us-central1 --project final-project-465717
kubectl get pods
kubectl get nodes
kubectl apply -f sell-registration-microservice.yaml 
kubectl get nodes
kubectl get pods
kubectl get nodes
kubectl get pods
kubectl get nodes
cd ~bal
cd ..
cd ball
cd balance_update_service/
npm install express
npm install body-parser
ls
./deploy.sh
kubectl get nodes
kubectl apply -f balance-update-service.yaml
kubectl get nodes
kubectl get pods
cd ll
cd ..
ls
kubectl apply -f ingress.yaml
kubectl get pods
kubectl apply -f ingress.yaml
clear
kubectl apply -f ingress.yaml
kubectl get pods
kubectl get rs
kubectl get deployment
kubectl get  ingress
kubectl get ingress
kubectl get service
ls
cd proyecto_final/
ls
cd web-recharge-app/
ls
chmod u+x deploy.sh
ls
./deploy.sh
gcloud app deploy
cd proyecto_final/
git status
touch .gitignore
ls
cd sell_registration_microservice/
ls
cd ../topic_subscriber/
ls
ls node_modules/
ls -a
rm .gitignore 
ls -a 
cd ..
cd
cd proyecto_final/
ls
ls -a balance_update_service/
ls -a sell_registration_microservice/
ls -a topic_subscriber/
ls -a web-recharge-app/
rm web-recharge-app/.gitignore
ls
ls -a web-recharge-app/
ls -a web-recharge-app-service/
ls -a /home/villevillegas2/proyecto_final/balance_update_service/node_modules
find . -type f -name '*.gitinore'
find ./balance_update_service/ -type f -name '*.gitinore'
ls -a /home/villevillegas2/proyecto_final/balance_update_service
find /path -type f -iname ".*" -ls
find / -type f -iname ".*" -ls
find / -type f -iname ".gitignore" -ls
find proyecto_final/ -type f -iname ".gitignore" -ls
ls
find ./ -type f -iname ".gitignore" -ls
ls -a
vi .gitignore 
ls
cd proyecto_final/
nano .gitignore
clear
kubectl get pods
kubectl get pods owide
kubectl get pods o-wide
kubectl get pods
cd ..
cd topic_subscriber/
npm install axios
ls
./deploy.sh
ls
cd proyecto_final/
ls
cd topic_subscriber/
ls
deploy.sh
./deploy.sh
cr proyecto_final/
cd proyecto_final/
cd topic_subscriber/
ls
./deploy
./deploy.sh
git rm --cached
git rm -r --cached
git rm -r --cached .
git add .
cd ..
> git rm --cached -r -- .
> git rm --help
> rm --help
git rm -r -cached .
git rm -r -cached .
git rm -r --cached .
git add .
git status
git rm -r --cached .
cd ..
git rm -r --cached .
git rm -r -f --cached .
