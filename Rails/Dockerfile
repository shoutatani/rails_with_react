ARG VERSION="2.7.1-buster"
FROM ruby:${VERSION}

ARG RAILS_ROOT=/Rails

RUN set -x \
&&  gem install bundler -N

RUN set -x \
  && apt-get update \
  && apt-get install -y apt-transport-https \
  && curl -sL https://deb.nodesource.com/setup_14.x | bash - \
  && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
  && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
  && apt remove yarn \
  && apt-get update \
  && apt-get install -y locales default-mysql-client yarn \
  && apt-get purge -y apt-transport-https \
  && apt-get autoremove \
  && apt-get autoclean \
  && apt-get clean

# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.7.3/wait /wait 

# RUN chmod +x /wait

RUN set -x \
&& echo "ja_JP.UTF-8 UTF-8" > /etc/locale.gen \
&& locale-gen

ENV LC_ALL ja_JP.UTF-8

WORKDIR ${RAILS_ROOT}
COPY ./Gemfile ./Gemfile
COPY ./Gemfile.lock ./Gemfile.lock
# COPY ./entrypoint.sh ../entrypoint.sh

RUN set -x \
&& bundle install --jobs=4

# RUN set -x \
# && chmod o+x ../entrypoint.sh

CMD rm -f tmp/pids/server.pid \
&& bundle exec rails server -b 0.0.0.0 -p 8080