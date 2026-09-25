FROM ruby:3.2

WORKDIR /app

COPY Gemfile Gemfile.lock* ./

RUN bundle install

COPY . .

EXPOSE 4000
EXPOSE 35729

CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--livereload"]