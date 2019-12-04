# elasticsearch on cloud9
java -version # need 8 or better 
# sudo apt-get update && sudo apt-get install default-jdk 
# curl -sL https://gist.githubusercontent.com/naxmefy/c9b49d10de6827a336f81e6cbcccabe3/raw/16b84294f32c151c3f4951602b736898f036af7f/c9-java8.sh | sudo bash - 

wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.0.1-linux-x86_64.tar.gz
wget https://artifacts.elastic.co/downloads/elasticsearch/elasticsearch-7.0.1-linux-x86_64.tar.gz.sha512
shasum -a 512 -c elasticsearch-7.0.1-linux-x86_64.tar.gz.sha512 
tar -xzf elasticsearch-7.0.1-linux-x86_64.tar.gz
cd elasticsearch-7.0.1/

# ./bin/elasticsearch # run 
# ./bin/elasticsearch -d -Ecluster.name=my_cluster -Enode.name=node_1 # run in cluster 
# ./bin/elasticsearch -d -p pid # run as daemon # pkill -F pid 

sudo apt-get install jq
