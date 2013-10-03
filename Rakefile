desc "compile stylesheets"
task :compile do
  sh "bundle exec compass compile"
end

desc "watch for changes to Sass source files and recompile"
task :watch do
  sh "bundle exec compass watch"
end

task :default => :compile
