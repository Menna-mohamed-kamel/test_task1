# Use a Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install 

# Copy the rest of the application code to the working directory
COPY . .


# Expose the port your app runs on
EXPOSE 3000

# Start the app using serve command
CMD ["npm", "start"]


#      build: docker build -t test_task1 .
#      Run:  docker run -p 3000:3000 test_task1
