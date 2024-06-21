#include<stdio.h>

int main()
{
    int arr[5];

    printf("Enter the elements of array:");
    for(int i=0;i<5;i++)
    {
        scanf("%d",&arr[i]);
    }

    int val,flag=0,pos;
    printf("enter the element you want to search:");
    scanf("%d",&val);

    for(int i=0;i<5;i++)
    {
        if(arr[i]==val)
        {
            flag=1;
            pos=i+1;
            break;
        }
    }

    if(flag==1) printf("Element found at %d ", pos);
    else{
        printf("not found");
    }
}