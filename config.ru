require 'rubygems'
require 'sinatra'
require './drum_machine'

require 'sass/plugin/rack'

Sass::Plugin.options[:style] = :compressed
use Sass::Plugin::Rack

run DrumMachine
