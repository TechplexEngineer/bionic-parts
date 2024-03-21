https://stackoverflow.com/questions/60790994/webusb-unable-to-claim-interface-error
https://www.reactivated.net/writing_udev_rules.html
https://superuser.com/questions/677106/how-can-i-check-if-a-udev-rule-fired

Invalid inotify descriptor.
DEVPATH=/devices/pci0000:00/0000:00:14.0/usb3/3-5/3-5.3/3-5.3.1/3-5.3.1:1.0/usbmisc/lp5
DEVNAME=/dev/usb/lp5
MAJOR=180
MINOR=5
ACTION=add
SUBSYSTEM=usbmisc
USEC_INITIALIZED=1610114846
Unload module index
Unloaded link configuration context.
 9:06PM udev/rules.d echo -n 3-5.3.1:1.0 > /sys/bus/usb/drivers/usblp/unbind
zsh: permission denied: /sys/bus/usb/drivers/usblp/unbind
 9:07PM udev/rules.d sudo echo -n 3-5.3.1:1.0 > /sys/bus/usb/drivers/usblp/unbind
zsh: permission denied: /sys/bus/usb/drivers/usblp/unbind
 9:07PM udev/rules.d sudo echo -n 3-5.3.1:1.0 > /sys/bus/usb/drivers/usblp/unbind 
zsh: permission denied: /sys/bus/usb/drivers/usblp/unbind
 9:07PM udev/rules.d sudo su -c " echo -n 3-5.3.1:1.0 > /sys/bus/usb/drivers/usblp/unbind"
bash: line 0: echo: write error: No such device
 9:07PM udev/rules.d udevadm test $(udevadm info --query=path --name=usb/lp5)        
Unknown device "/dev/usb/lp5": No such file or directory
syspath parameter missing.
 9:21PM udev/rules.d udevadm info --query=path --name=usb/lp5  
Unknown device "/dev/usb/lp5": No such file or directory
 9:21PM udev/rules.d udevadm info --query=path --name=/dev/usb/hiddev

Process '/bin/sh -c 'echo -n 3-5.3.2.4:1.0 > /sys/bus/usb/drivers/usblp/unbind && echo -n 3-5.3.2.4:1.0 > /sys/bus/usb/drivers/usbfs/unbind'' failed with exit code 1.

Running command "VBoxCreateUSBNode.sh 189 277 00 vboxusers"

system: /usr/lib/udev

user: /etc/udev/rules.d


cat /etc/udev/rules.d/999-dymo.rules 
SUBSYSTEM=="usb", ATTRS{idVendor}=="0922", ATTRS{idProduct}=="0020", MODE="0664", GROUP="adm", RUN+="/bin/sh -c 'echo -n $id:1.0 > /sys/bus/usb/drivers/usblp/unbind && echo -n $id:1.0 > /sys/bus/usb/drivers/usbfs/unbind'"