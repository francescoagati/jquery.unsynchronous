
desc 'compile file'
task :compile_file, :file do |t,args|
  file=args[:file]
  content=`livescript -cp #{file}.ls`
  open("#{file}.cjs",'w') {|f| f.puts(content) }
  `continuation #{file}.cjs -po #{file}.js`
  
end


desc "default"
task :default do
  Rake::Task["compile_file"].execute(file:'lib/jquery.unsynchronous')
  Rake::Task["compile_file"].execute(file:'spec/javascripts/jquery.unsynchronousSpec')
  
  #Rake::Task["jasmine:ci"].execute
end

begin
  require 'jasmine'
  load 'jasmine/tasks/jasmine.rake'
rescue LoadError
  task :jasmine do
    abort "Jasmine is not available. In order to run jasmine, you must: (sudo) gem install jasmine"
  end
end
