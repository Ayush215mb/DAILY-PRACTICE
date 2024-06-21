//write a program to store roll number and marks obtained by 4 students side by side in a matrix

#include<stdio.h>

int main()
{
    int arr[4][2];

    for(int i=0;i<4;i++)
    {
        printf("Enter the roll number: ");
        for(int j=0;j<2;j++)
        { 
            scanf("%d",&arr[i][j]);
        }
        printf("\n");
    }
}