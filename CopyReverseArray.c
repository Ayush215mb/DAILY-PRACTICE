//taking an array(arr) as input and making another array(brr) where the elements are same as of arr but in the reverse order.
#include<stdio.h>
int main()
{
    int m;
    printf("Enter the size of Array:");
    scanf("%d",&m);
    int arr[m];
    printf("\nEnter %d elements to add in the array:",m);
    for(int i=0;i<m;i++)
    {
        scanf("%d",&arr[i]);
    }

    int brr[m];
    for(int i=0;i<m;i++)
    {
        brr[i]=arr[m-1-i];
    }
    printf("\nThe elements of reverse Array is ");
    for(int i=0;i<m;i++)
    {
        printf("%d ",brr[i]);
    }


    
}