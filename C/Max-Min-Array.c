#include<stdio.h>

int main()
{
    int arr[5],i;

    printf("Enter the elements of array:");
    for(int i=0;i<5;i++)
    {
        scanf("%d",&arr[i]);
    }

    printf("the elements of array are:");
    for(int i=0;i<5;i++)
    {
        printf("%d ",arr[i]);
    }
    

    int max=arr[0];
    
    for(int i=0;i<5;i++)
    {
        if(max<arr[i]) max= arr[i];
    }
    printf("\n %d",max);

    int min=arr[0];
     for(int i=0;i<5;i++)
    {
        if(max>arr[i]) max= arr[i];
    }
    printf("\n %d",min);

    
}