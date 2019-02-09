#My suggested list of terminal commands for your brand new PocketCHIP. These do the following things:

#**Note:** Do not add the `$` or `#` from each line before the command! `$` denotes a command to be run by your default user, `#` denotes a command that requires `root` privileges.

#$ passwd						# Reset your password.
#$ sudo -i						# Give you `root` user access to update and install software.

# apt-get update&&apt-get upgrade&&apt-get dist-upgrade	# Update your PocketCHIP's core operating system.
# apt-get install locales				# Make sure that your locale and time zone data is right.
# dpkg-reconfigure tzdata
# locale-gen en_US en_US.UTF-8

# apt-get install openssh-server	# Install SSH.
# iw wlan0 set power_save off		# shut off WiFi power saving to prevent timeouts.

# apt-get install rsync			# Install `rsync` for easier file copying.
# apt-get install git			# Install `git` to easily grab projects from GitHub.

# wget http://bit.ly/29uWueR		# Install [Pocket Home (Marshmallow edition)](https://bbs.nextthing.co/t/pocket-home-marshmallow-edition/6579).
# mv 29uWueR install-pockethome		
# chmod +x install-pockethome		
# ./install-pockethome		

