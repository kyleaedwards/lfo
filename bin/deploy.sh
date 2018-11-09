# Update/install node modules
yarn

# # Generate public files
yarn build

# Remove node modules
rm -rf ./node_modules

# Retrieve EB environment label from config
CURRENT_DIR=$(dirname "$0")
EB_CONFIG="$CURRENT_DIR/../.elasticbeanstalk/config.yml"
EB_ENV="$(cat "$EB_CONFIG" | sed -n -e "s/^.*environment: //p")"

docker build -t kedwio .
docker tag kedwio:latest 605028258457.dkr.ecr.us-east-1.amazonaws.com/kedwio:latest
docker push 605028258457.dkr.ecr.us-east-1.amazonaws.com/kedwio:latest

# Deploy to Elastic Beanstalk
eb deploy "$EB_ENV"
