//Siddharth Version 1
int gs=1;
/*****************************************************/
#include<stdio.h>
/**********************Check Function : checks if input is integer or not**********************/
int check(double k)
{
  int q=(int)k;
  if((k-q)==0)
    {
      if(q>0)
	return 1;
      else
	return 0;
    }
  else
    return 0;
}
/**********************Input Function: Gets valid input from user************************************************/
int input()
{
  printf("input the size of the Grid.(a positive integer) \n ");
  double g_s;
  if(scanf("%lf",&g_s)==1)
    {
      if(check(g_s)==0)
	{
	  printf("Enter Valid input \n");
	  g_s=input();
	}
    }
  else
    {
      printf("Please enter valid input \n");
    }
  return (int)g_s;
}
/****************************************************************/
/****************************************************************/
void ini(char ch[][gs])
{
  int i,j; 
   for(i=0;i<gs;i++)
    {
      printf("value of i %d \n \n ",i);
      for(j=0;j<gs;j++)
	{
	  
	     ch[i][j]=' ';
	}
    }

}
/******************Gets Initial coordinates for the game ***********************************************/
void getip(int x[])
{
  while(1)
    {
      printf("please enter the initial position ; x and y \n");
      scanf("%d%d",&x[0],&x[1]);
      if((x[0]>0)&&(x[0]<=gs)&&(x[1]>0)&&(x[1]<=gs))
	break;
      else
	printf("please enter values between 1 and %d \n",gs);
    }
}

/*********************Display Function********************************************/
void disp(char ch[][gs])
{
  int i,j,k;
  for(i=0;i<gs;i++)
    {
    	if(i==0)
    	{
    	printf(" \t");
    	for (k=1;k<gs+1;k++)
    	{
    	printf("%d \t",k);
    	}
    	printf("\n");
    	}
    	
      for(j=0;j<gs;j++)
      {
      if(j==0)
      printf("%d \t",i+1);
	printf("%c \t",ch[i][j]);
	}
      printf("\n");
      
    }
}
/*********************************Main -Start************************************/


void main()
{
  int ip[2]={0,0};
  printf("Welcome!This is an Etch-a-Sketch program.\n \n");
  gs=input(); 
  printf("Grid is being created....... \n\n\n");
  
  char grid[gs][gs];
  ini(grid);
  disp(grid);
  char ch='q';
  getip(ip);
/************************Game Starts (after full setup)********************/
  while(1)
    {
      printf("Current Position :\n x : %d \n y : %d \n",ip[0],ip[1]); 
      printf("\n Commands:\n w for up\n a for left\n s for down\n d for right \n");
      printf("c for clear \n q for quit \n");
      scanf("%c",&ch);
      disp(grid);
/*************left*********************/
      if(ch=='a')
	{
	  if(ip[1]==1)
	    continue;
	  else
	    {
	      ip[1]=ip[1]-1;
	      grid[ip[0]-1][ip[1]-1]='X';
	    }
	}
/*****************right******************/
      else if(ch=='d')
	{
	  if(ip[1]==gs)
	    continue;
	  else
	    {
	      ip[1]=ip[1]+1;
	      grid[ip[0]-1][ip[1]-1]='X';
	    }
	}
/********************Up Direction****************/
      else if(ch=='w')
	{
	  if(ip[0]==1)
	    continue;
	  else
	    {
	      ip[0]=ip[0]-1;
	      grid[ip[0]-1][ip[1]-1]='X';
	    }
	}
/************************Down direction*****************/
      else if(ch=='s')
	{
	  if(ip[0]==gs)
	    continue;
	  else
	    {
	      ip[0]=ip[0]+1;
	      grid[ip[0]-1][ip[1]-1]='X';
	    }
	}
/*************************Clear******************************************/
      if(ch=='c')
	{
	  printf("Clearing.... \n");
	  ini(grid);
	  getip(ip);
	  continue;
	}
/********************Quit*******************************************/
      if(ch=='q')
	{
	  printf(" Thank you for visiting Etch-A-Sketch by Siddharth. Hope you enjoyed...........\n");
	  break;
	}
    }
}
