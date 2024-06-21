#include<stdio.h>

int main()
{
    int arr[6];

    printf("Enter the leemnts of array: ");
    for(int i=0; i<6;i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("the elemnts of array is: ");
    for(int i=0; i<6;i++)
    {
        printf("%d  ",arr[i]);

    }

    int freq=0,val;

    printf("\nEnter the number:");
    scanf("%d",&val);

    for(int i=0;i<6;i++)
    {
        if(arr[i]==val)
        {
            freq++;
        }
    }


    printf("The freq of give number is %d",freq);
}