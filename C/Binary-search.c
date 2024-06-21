#include<stdio.h>

int main()
{
    int arr[10];

    printf("Enter the elements of array:");
    for(int i=0;i<10;i++)
    {
        scanf("%d",&arr[i]);
    }

    int val,pos;
    printf("enter the element you want to search:");
    scanf("%d",&val);

    int i=0,j=9,flag=0,mid;

    while(i<=j)
    {
        mid= (i+j)/2;

        if(arr[mid]==val)
        {
            flag=1;
            pos=mid+1;
            break;
        }

        if(arr[mid]>val)
        {
            j=mid-1;
        }
        if(arr[mid]<val)
        {
            i=mid+1;
        }
    }

    if(flag==1) printf("element found at %d", pos);
    else{
        printf("element not found");
    } 
}