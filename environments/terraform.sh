# install

uname -a # is 32 or 64 bit os?

wget https://releases.hashicorp.com/terraform/0.11.11/terraform_0.11.11_linux_amd64.zip # linux 64
unzip terraform_0.11.11_linux_amd64.zip -d /usr/local/bin/

wget https://releases.hashicorp.com/terraform/0.11.11/terraform_0.11.11_windows_amd64.zip # windows 64 (cygwin)
unzip terraform_0.11.11_windows_amd64.zip -d /usr/local/bin/
terraform --version

terraform plan
terraform apply; and export TERRAFORM_JMETER=(terraform show | grep -m 1 private_ip | cut -d= -f2 | sed -e 's/^[ \t]*//') ;and echo "TERRAFORM IP is $TERRAFORM_JMETER" # export the IP above to a variable
terraform destroy

## Frequent Terraform Shell Commands (JMeter Load Generator)
cd ~/repo/Sys-Terraform-Instances/jmeter/
terraform plan
terraform apply
terraform show | grep private_ip # the IP(s) of the instance
export TERRAFORM_JMETER=10.111.71.28 # set the IP to a variable for later use
terraform plan; and terraform apply; and export TERRAFORM_JMETER=(terraform show | grep -m 1 private_ip | cut -d= -f2 | sed -e 's/^[ \t]*//') ;and echo "TERRAFORM IP is $TERRAFORM_JMETER" # export the IP above to a variable
ssh -i ~/.aws/keys/Integrations.pem centos@$TERRAFORM_JMETER
scp -rCi ~/.aws/keys/Integrations.pem centos@$TERRAFORM_JMETER:/var/log/jmeter/ ~/ # copy results from the system
terraform destroy

#On the JMeter instance
cd ~/jmeter
bzt mySenerio.yml

sudo yum update
sudo pip install --upgrade pip
sudo pip install --upgrade urllib3

ps -A | grep java # if taurus has lost control of the test, find the PID(s)
kill -9 PIDs # kill the java PID(s)
#or
ps ax | grep java | grep -v 'grep' | cut -d '?' -f1 | xargs kill -9 # kill ALL java processes by one command
## Frequent Terraform Shell Commands (JMeter Load Generator)
