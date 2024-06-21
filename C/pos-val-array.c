#include<stdio.h>

int main()
{
    int arr[6];
    printf("enter the elements of array: ");
    for(int i=0;i<5;i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("the elements of array are: ");
    for(int i=0;i<5;i++)
    {
        printf("%d ", arr[i]);
    }

    int pos,val;

    printf("\nEnter the position where you want to enetr a element:");
    scanf("%d",&pos);

    printf("enter the value you want to enter: ");
    scanf("%d",&val);

    for (int j=5;j>pos-1;j--)
    {
        arr[j+1]=arr[j];
        arr[pos-1]=val;
    }

    printf("the updated array is: ");
    for(int i=0;i<6;i++)
    {
        printf("%d ", arr[i]);
    }
    
}