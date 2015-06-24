task default: 'assets:precompile'

namespace :assets do
  desc 'Precompile assets'
  task :precompile do
    Rake::Task['clean'].invoke
    sh 'bundle exec jekyll build'
  end
end

