FROM mongo

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY init_replica.js /usr/src/app/
COPY initCommand.sh /usr/src/app/

# Bundle app source
# COPY . /usr/src/app

# EXPOSE 8086
CMD ["sh","initCommand.sh"]
# CMD [ "apt-get", "install","nano"]