/**
 * @date    4 April 2015
 * @version 0.1
 * @editby Siddharth Gangal  
*/


obj-m+=hello2.o

all:
	make -C /lib/modules/$(shell uname -r)/build/ M=$(PWD) modules
clean:
	make -C /lib/modules/$(shell uname -r)/build/ M=$(PWD) clean
