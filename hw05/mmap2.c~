//program by Divakar,b12067


#include <stdio.h>
#include <stdlib.h>
#include <sys/mman.h>
#include <sys/stat.h>
#include <fcntl.h> 
#include <signal.h>    // Defines signal-handling functions (i.e. trap Ctrl-C)
#include "gpio.h"


int goOn  = 1;

void signal_handler(int sig);

void signal_handler(int sig)
{
	printf("Ctrl-C pressed , exiting\n");
	goOn = 0;
}


int main(int argc, char *argv[]){

	// System is used for running the command in quotes at the time of runtime
	
	system("bone_eqep1b > /sys/devices/bone_capemgr.*/slots");
	system("bone_eqep2b > /sys/devices/bone_capemgr.*/slots");

	// Declaring variables. Same as in gpiothru.c but we have one for switch and one for led


	volatile void *gpio_addr0;
	volatile void *gpio_addr1;
	volatile unsigned int *gpio_oe_addr0;
	volatile unsigned int *gpio_oe_addr1;
	volatile unsigned int *gpio_datain_addr0;
	volatile unsigned int *gpio_datain_addr1;
	volatile unsigned int *gpio_setdataout_addr0;
	volatile unsigned int *gpio_setdataout_addr1;
	volatile unsigned int *gpio_cleardataout_addr0;
	volatile unsigned int *gpio_cleardataout_addr1;

	int fd = open("/dev/mem", O_RDWR);
	int goOn = 1;    // Set to 0 when ctrl-c is pressed

	gpio_addr0 = mmap(0,GPIO0_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, GPIO0_START_ADDR);
	gpio_addr1 = mmap(0,GPIO1_SIZE, PROT_READ | PROT_WRITE, MAP_SHARED, fd, GPIO1_START_ADDR);

	gpio_oe_addr0 = gpio_addr0 + GPIO_OE;
	gpio_oe_addr1 = gpio_addr1 + GPIO_OE;
	gpio_datain_addr0 = gpio_addr0 + GPIO_DATAIN;
	gpio_datain_addr1 = gpio_addr1 + GPIO_DATAIN;
	gpio_setdataout_addr0 = gpio_addr0 + GPIO_SETDATAOUT;
	gpio_setdataout_addr1 = gpio_addr1 + GPIO_SETDATAOUT;
	gpio_cleardataout_addr0 = gpio_addr0 + GPIO_CLEARDATAOUT;
	gpio_cleardataout_addr1 = gpio_addr1 + GPIO_CLEARDATAOUT;


	// for ctrl-c

	signal(SIGINT, signal_handler);

	if(gpio_addr0 == MAP_FAILED) {
        	exit(1);
	} else if(gpio_addr1 == MAP_FAILED) {
        	exit(1);
	}

	*gpio_oe_addr0 &= GPIO_03;
	*gpio_oe_addr0 &= ~USR0;
	*gpio_oe_addr1 &= GPIO_40;
	*gpio_oe_addr1 &= ~USR3;

	while(goOn) {
		if(*gpio_datain_addr0 & GPIO_03) {
			*gpio_setdataout_addr0 = USR0;
		} else {
			*gpio_cleardataout_addr0 = USR0;
		}
		if(*gpio_datain_addr1 & GPIO_40) {
			*gpio_setdataout_addr1 = USR3;
		} else {
			*gpio_cleardataout_addr1 = USR3;
		}
	}


	munmap((void *)gpio_addr0, GPIO0_SIZE);
	munmap((void *)gpio_addr1, GPIO1_SIZE);
	close(fd);
	return 0;
}
