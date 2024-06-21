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

    int val,index=6;

    printf("\nEnter the value you want to remove:");
    scanf("%d",&val);

    for(int i=0;i<index;i++)
    {
        if(arr[i]==val)
        {
            for(int j=i;j<index;j++)
            {
                arr[j]=arr[j+1];
                 i--;
                 index--;
                
            }
           
        }
    }

        printf("updated array is: ");
    for(int i=0; i<index;i++)
    {
        printf("%d  ",arr[i]);

    }

}