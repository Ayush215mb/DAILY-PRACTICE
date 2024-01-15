//count the number of elements in given array greater than a given variable x
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

    int x;
    printf("\nEnter the value of x:");
    scanf("%d",&x);
    int count=0;
    for(int k=0;k<m;k++)
    {
        if(arr[k]>x)
        {
            count+=1;
        }
    }
    printf("\nThe number of elements in the array greater than %d is %d.",x,count);

}