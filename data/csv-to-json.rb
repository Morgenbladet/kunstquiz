require 'csv'
require 'json'

verker = CSV.read("verker.csv",
                  encoding: "UTF-8",
                  headers: true).to_a
headers = verker.shift
hashes = verker.map{|verk| Hash[headers.zip(verk)]}

STDOUT << JSON.generate(hashes)
