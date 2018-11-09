# Update/install node modules
yarn

# Generate public files
yarn build

# Remove node modules
rm -rf ./node_modules

# Deploy to Elastic Beanstalk
eb deploy
