# v.2 Amazon Linux 
python3 --version
alias | grep python
alias python=python3
python --version
pip --version

sudo yum -y install java-1.8.0-openjdk-devel.x86_64
sudo yum -y remove java-1.7.0-openjdk
java -version

# sudo pip install bzt==1.9 # current install broken so install older then upgrade, not an issue after 1.13.4
sudo pip install --upgrade bzt
bzt -install-tools -o modules.install-checker.include=jmeter -o modules.jmeter.plugins=jmeter.backendlistener.elasticsearch,jpgc-tst -o execution.0.concurrency=1 -o execution.0.iterations=1 http://blazedemo.com/
