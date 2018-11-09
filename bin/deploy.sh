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

# Deploy to Elastic Beanstalk
eb deploy "$EB_ENV"
