require 'sinatra/base'
require 'sinatra/reloader' if development?

class DrumMachine < Sinatra::Base
  configure :development do
    register Sinatra::Reloader
  end

  get '/' do
    erb :index
  end

  # Assets
  #get '/css/:name.css' do
   #content_type 'text/css', :charset => 'utf-8'
   #scss(:"css/#{params[:name]}")
  #end
end
