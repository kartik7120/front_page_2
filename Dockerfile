FROM node:18

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

ARG PORT=3000
ENV PORT=${PORT}
EXPOSE ${PORT}

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH

RUN mkdir /nextjs_app
WORKDIR /nextjs_app
ENV PATH /audiometer_app/node_modules/.bin:$PATH
COPY package.json /nextjs_app/package.json
COPY package-lock.json /nextjs_app/package-lock.json
RUN npm install

COPY . /nextjs_app/

ENTRYPOINT [ "npm" , "run" , "dev" ]